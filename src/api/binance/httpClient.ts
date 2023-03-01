import * as crypto from "crypto";
import axios from "axios";

import { DEFAULT_REQUEST_ERROR_MESSAGE } from "../../constants";

import { 
  httpClientError,
  IApiClientInitializeOptions,
  IHttpClientRequestConfig, 
  IHttpClientRequestOptions 
} from "./types";

import { RequestType } from "./enums";

export class BinanceApiClient {
  url: string;
  baseApiUrl: string;
  testnetUrl: string;
  enableTestnet: boolean;

  private apiKey: string;
  private apiSecret: string;

  constructor(options: IApiClientInitializeOptions) {
    this.enableTestnet = options.enableTestnet;
    this.apiKey = options.apiKey;
    this.apiSecret = options.apiSecret;
  }

  private getTimestamp() {
    return Date.now();
  }

  private makeQueryString<P>(params: P): string {
    return Object.keys(params)
      .sort()
      .map((key) => `${key}=${params[key]}`)
      .join("&");
  }

  private createSignature(queryString: string): string {
    const timestamp = this.getTimestamp();

    return crypto
      .createHmac("sha256", this.apiSecret)
      .update(`${queryString}&timestamp=${timestamp}`)
      .digest("hex");
  }

  private signRequest<P>(path: string, params: P) {
    const timestamp = this.getTimestamp();
    const queryString = this.makeQueryString(params);
    const signature = this.createSignature(queryString);

    return {
      url: `/${path}?${queryString}&timestamp=${timestamp}&signature=${signature}`,
      headers: {
        "X-MBX-APIKEY": this.apiKey,
      },
    };
  }

  private async signedRequest<P, D>(
    method: RequestType,
    path: string,
    params: P,
    data: D
  ) {
    const { url, headers, } = this.signRequest(path, params);
    const requestBody = data ? JSON.stringify(data) : undefined;

    const response = await this.request({
      method,
      headers,
      path: url,
      params: params,
      data: requestBody,
    });

    return response.data;
  }

  private async request<P, D>(options: IHttpClientRequestConfig<P, D>) {
    const config: Record<string, unknown> = {
      url: options.path,
      method: options.method,
      baseURL: this.url,
      params: options.params,
      data: options.data,
    };

    if (options.headers) {
      config.headers = {
        ...options.headers,
        "Content-Type": "application/json",
      };
    }

    return await axios.request(config);
  }

  throwError(error: httpClientError) {
    throw new Error(error?.message || DEFAULT_REQUEST_ERROR_MESSAGE);
  }

  async publicRequest<P, D>(options: IHttpClientRequestOptions<P, D>) {
    return await this.request({
      ...options,
      params: options.params,
      data: options.data,
    });
  }

  async keyedRequest<P, D>(options: IHttpClientRequestOptions<P, D>) {
    return await this.request({ 
      ...options,
      params: options.params,
      data: options.data,
      headers: {
        "X-MBX-APIKEY": this.apiKey,
      },
    });
  }

  async privateRequest<P, D>(options: IHttpClientRequestOptions<P, D>) {
    return await this.signedRequest<P, D>(
      options.method, 
      options.path, 
      options.params, 
      options.data
    );
  }
}
