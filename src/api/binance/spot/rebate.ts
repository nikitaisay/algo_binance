import { BINANCE_API_URLS } from "../../../constants";

import { RequestType } from "../enums";
import { BinanceApiClient } from "../httpClient";
import { IApiClientInitializeOptions } from "../types";

import { IGetSpotRebateHistoryRecordsOptions } from "./types";

export class BinanceSpotRebateApi extends BinanceApiClient {
  constructor(options: IApiClientInitializeOptions) {
    super(options);
    this.baseApiUrl = BINANCE_API_URLS.SPOT.BASE;
    this.testnetUrl = BINANCE_API_URLS.SPOT.TESTNET;
    this.url = options.enableTestnet ? this.testnetUrl : this.baseApiUrl;
  }

  async getSpotRebateHistoryRecords(options: IGetSpotRebateHistoryRecordsOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/rebate/taxQuery",
        params: options,
      });
      return res.data;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }
}
