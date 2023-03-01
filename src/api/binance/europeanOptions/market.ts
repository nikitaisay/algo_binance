import { BINANCE_API_URLS } from "../../../constants";

import { RequestType } from "../enums";
import { BinanceApiClient } from "../httpClient";
import { IApiClientInitializeOptions } from "../types";

import { 
  IGet24hrTickerPriceChangeStatisticsOptions,
  IGetCandlestickDataOptions,
  IGetHistoricalExerciseRecordsOptions,
  IGetOptionMarkPriceOptions,
  IGetOrderBookOptions, 
  IGetRecentTradesOptions 
} from "./types";

export class BinanceEuropeanOptionsMarketApi extends BinanceApiClient {
  constructor(options: IApiClientInitializeOptions) {
    super(options);
    this.baseApiUrl = BINANCE_API_URLS.EUROPEAN_OPTIONS.MARKET.BASE;
    this.testnetUrl = BINANCE_API_URLS.EUROPEAN_OPTIONS.MARKET.TESTNET;
    this.url = options.enableTestnet ? this.testnetUrl : this.baseApiUrl;
  }

  async testConnectivity() {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/eapi/v1/ping",
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async checkServerTime() {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/eapi/v1/time",
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getExchangeInfo() {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/eapi/v1/exchangeInfo",
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getOrderBook(options: IGetOrderBookOptions) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/eapi/v1/depth",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getRecentTrades(options: IGetRecentTradesOptions) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/eapi/v1/trades",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getCandlestickData(options: IGetCandlestickDataOptions) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/eapi/v1/klines",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getOptionMarkPrice(options: IGetOptionMarkPriceOptions = {}) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/eapi/v1/mark",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async get24hrTickerPriceChangeStatistics(options: IGet24hrTickerPriceChangeStatisticsOptions = {}) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/eapi/v1/ticker",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getSymbolPriceTicker(options: IGet24hrTickerPriceChangeStatisticsOptions) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/eapi/v1/index",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getHistoricalExerciseRecords(options: IGetHistoricalExerciseRecordsOptions = {}) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/eapi/v1/exerciseHistory",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }
}
