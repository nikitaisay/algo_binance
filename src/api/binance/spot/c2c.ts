import { BINANCE_API_URLS } from "../../../constants";

import { RequestType } from "../enums";
import { BinanceApiClient } from "../httpClient";
import { IApiClientInitializeOptions } from "../types";

import { 
  IGetC2CTradeHistoryOptions
} from "./types";


export class BinanceSpotC2CApi extends BinanceApiClient {
  constructor(options: IApiClientInitializeOptions) {
    super(options);
    this.baseApiUrl = BINANCE_API_URLS.SPOT.MARKET.BASE;
    this.testnetUrl = BINANCE_API_URLS.SPOT.MARKET.TESTNET;
    this.url = options.enableTestnet ? this.testnetUrl : this.baseApiUrl;
  }

  async getC2CTradeHistory(options: IGetC2CTradeHistoryOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/c2c/orderMatch/listUserOrderHistory",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }
}
