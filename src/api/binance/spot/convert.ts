import { BINANCE_API_URLS } from "../../../constants";

import { RequestType } from "../enums";
import { BinanceApiClient } from "../httpClient";
import { IApiClientInitializeOptions } from "../types";

import { 
  IGetConvertTradeHistoryOptions,
  IGetListOfAllConvertPairsOptions, 
  IGetOrderStatusOptions, 
  IQueryOrderQuantityPrecisionPerAssetOptions 
} from "./types";

export class BinanceSpotConvertApi extends BinanceApiClient {
  constructor(options: IApiClientInitializeOptions) {
    super(options);
    this.baseApiUrl = BINANCE_API_URLS.SPOT.BASE;
    this.testnetUrl = BINANCE_API_URLS.SPOT.TESTNET;
    this.url = options.enableTestnet ? this.testnetUrl : this.baseApiUrl;
  }

  async getListOfAllConvertPairs(options: IGetListOfAllConvertPairsOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/convert/exchangeInfo",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async queryOrderQuantityPrecisionPerAsset(options: IQueryOrderQuantityPrecisionPerAssetOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/convert/assetInfo",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getOrderStatus(options: IGetOrderStatusOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/convert/orderStatus",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getConvertTradeHistory(options: IGetConvertTradeHistoryOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/convert/tradeFlow",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }
}
