import { BINANCE_API_URLS } from "../../../constants";

import { RequestType } from "../enums";
import { BinanceApiClient } from "../httpClient";
import { IApiClientInitializeOptions } from "../types";

import { 
  IGet24hrTickerPriceChangeStatisticsOptions,
  IGetAggregateTradesListOptions,
  IGetCandlestickDataOptions,
  IGetCurrentAveragePriceOptions,
  IGetExchangeInfoOptions, 
  IGetOrderBookOptions, 
  IGetRecentTradesListOptions, 
  IGetRollingWindowPriceChangeStatisticsOptions, 
  IGetSymbolPriceTickerOptions
} from "./types";


export class BinanceSpotMarketApi extends BinanceApiClient {
  constructor(options: IApiClientInitializeOptions) {
    super(options);
    this.baseApiUrl = BINANCE_API_URLS.SPOT.MARKET.BASE;
    this.testnetUrl = BINANCE_API_URLS.SPOT.MARKET.TESTNET;
    this.url = options.enableTestnet ? this.testnetUrl : this.baseApiUrl;
  }

  async testConnectivity() {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/api/v3/ping",
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
        path: "/api/v3/time",
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getExchangeInfo(options: IGetExchangeInfoOptions = {}) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/api/v3/exchangeInfo",
        params: options,
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
        path: "/api/v3/depth",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getRecentTradesList(options: IGetRecentTradesListOptions) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/api/v3/depth",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getAggregateTradesList(options: IGetAggregateTradesListOptions) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/api/v3/aggTrades",
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
        path: "/api/v3/klines",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getCurrentAveragePrice(options: IGetCurrentAveragePriceOptions) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/api/v3/avgPrice",
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
        path: "/api/v3/ticker/24hr",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getSymbolPriceTicker(options: IGetSymbolPriceTickerOptions = {}) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/api/v3/ticker/price",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getSymbolOrderBookTicker(options: IGetSymbolPriceTickerOptions = {}) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/api/v3/ticker/bookTicker",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getRollingWindowPriceChangeStatistics(options: IGetRollingWindowPriceChangeStatisticsOptions = {}) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/api/v3/ticker",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }
}