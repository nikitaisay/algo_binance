import { BINANCE_API_URLS } from "../../../constants";

import { RequestType } from "../enums";
import { BinanceApiClient } from "../httpClient";
import { IApiClientInitializeOptions } from "../types";

import { 
  IGetLiquidityInformationOfPoolOptions
} from "./types";


export class BinanceSpotBSwapApi extends BinanceApiClient {
  constructor(options: IApiClientInitializeOptions) {
    super(options);
    this.baseApiUrl = BINANCE_API_URLS.SPOT.MARKET.BASE;
    this.testnetUrl = BINANCE_API_URLS.SPOT.MARKET.TESTNET;
    this.url = options.enableTestnet ? this.testnetUrl : this.baseApiUrl;
  }

  async getAllSwapPools() {
    try {
      const res = await this.keyedRequest({
        method: RequestType.GET,
        path: "/sapi/v1/bswap/pools",
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getLiquidityInformationOfPool(options: IGetLiquidityInformationOfPoolOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/bswap/liquidity",
        params: options,
      });
      return res;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }
}
