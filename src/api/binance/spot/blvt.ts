import { BINANCE_API_URLS } from "../../../constants";

import { RequestType } from "../enums";
import { BinanceApiClient } from "../httpClient";
import { IApiClientInitializeOptions } from "../types";

import { 
  IGetBLVTInfoOptions,
  IQuerySubscriptionRecordOptions,
  IQueryRedemptionRecordOptions,
  IGetBLVTUserLimitInfoOptions
} from "./types";


export class BinanceSpotBLVTApi extends BinanceApiClient {
  constructor(options: IApiClientInitializeOptions) {
    super(options);
    this.baseApiUrl = BINANCE_API_URLS.SPOT.MARKET.BASE;
    this.testnetUrl = BINANCE_API_URLS.SPOT.MARKET.TESTNET;
    this.url = options.enableTestnet ? this.testnetUrl : this.baseApiUrl;
  }

  async getBLVTInfo(options: IGetBLVTInfoOptions) {
    try {
      const res = await this.keyedRequest({
        method: RequestType.GET,
        path: "/sapi/v1/blvt/tokenInfo",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async querySubscriptionRecord(options: IQuerySubscriptionRecordOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/blvt/subscribe/record",
        params: options,
      });
      return res;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async queryRedemptionRecord(options: IQueryRedemptionRecordOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/blvt/redeem/record",
        params: options,
      });
      return res;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getBLVTUserLimitInfo(options: IGetBLVTUserLimitInfoOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/blvt/userLimit",
        params: options,
      });
      return res;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }
}
