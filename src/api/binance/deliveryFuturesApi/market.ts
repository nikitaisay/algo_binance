import { BINANCE_API_URLS } from "../../../constants";

import { RequestType } from "../enums";
import { BinanceApiClient } from "../httpClient";
import { IApiClientInitializeOptions } from "../types";

import { 
  IGet24hrTickerPriceChangeStatisticsOptions,
  IGetAggregateTradesListOptions,
  IGetBasesOptions,
  IGetCandlestickDataOptions,
  IGetContinuousContractCandlestickDataOptions,
  IGetFundingRateHistoryOfPerpetualFuturesOptions,
  IGetIndexPriceAndMarkPriceOptions,
  IGetIndexPriceCandlestickDataOptions,
  IGetMarkPriceCandlestickDataOptions,
  IGetOpenInterestOptions,
  IGetOpenInterestStatisticsOptions,
  IGetOrderBookOptions, 
  IGetRecentTradesOptions, 
  IGetSymbolOrderBookTickerOptions, 
  IGetSymbolPriceTickerOptions,
  IGetTakerBuySellVolumeOptions,
  IGetTopTraderLongShortRatioAccountsOptions,
  IGetTopTraderLongShortRatioPostionsOptions
} from "./types";

export class BinanceDelivaryFuturesMarketApi extends BinanceApiClient {
  constructor(options: IApiClientInitializeOptions) {
    super(options);
    this.baseApiUrl = BINANCE_API_URLS.DELIVERY_FUTURES.MARKET.BASE;
    this.testnetUrl = BINANCE_API_URLS.DELIVERY_FUTURES.MARKET.TESTNET;
    this.url = options.enableTestnet ? this.testnetUrl : this.baseApiUrl;
  }

  async testConnectivity() {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/dapi/v1/ping",
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
        path: "/dapi/v1/time",
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
        path: "/dapi/v1/exchangeInfo",
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
        path: "/dapi/v1/depth",
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
        path: "/dapi/v1/trades",
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
        path: "/dapi/v1/aggTrades",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getIndexPriceAndMarkPrice(options: IGetIndexPriceAndMarkPriceOptions = {}) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/dapi/v1/premiumIndex",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getFundingRateHistoryOfPerpetualFutures(options: IGetFundingRateHistoryOfPerpetualFuturesOptions) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/dapi/v1/fundingRate",
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
        path: "/dapi/v1/klines",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getContinuousContractCandlestickData(options: IGetContinuousContractCandlestickDataOptions) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/dapi/v1/continuousKlines",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getIndexPriceCandlestickData(options: IGetIndexPriceCandlestickDataOptions) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/dapi/v1/indexPriceKlines",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getMarkPriceCandlestickData(options: IGetMarkPriceCandlestickDataOptions) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/dapi/v1/markPriceKlines",
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
        path: "/dapi/v1/ticker/24hr",
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
        path: "/dapi/v1/ticker/price",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getSymbolOrderBookTicker(options: IGetSymbolOrderBookTickerOptions = {}) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/dapi/v1/ticker/bookTicker",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getOpenInterest(options: IGetOpenInterestOptions) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/dapi/v1/openInterest",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getOpenInterestStatistics(options: IGetOpenInterestStatisticsOptions) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/futures/data/openInterestHist",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getTopTraderLongShortRatioAccounts(options: IGetTopTraderLongShortRatioAccountsOptions) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/futures/data/topLongShortAccountRatio",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getTopTraderLongShortRatioPostions(options: IGetTopTraderLongShortRatioPostionsOptions) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/futures/data/topLongShortPositionRatio",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getLongShortRatio(options: IGetTopTraderLongShortRatioPostionsOptions) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/futures/data/globalLongShortAccountRatio",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getTakerBuySellVolume(options: IGetTakerBuySellVolumeOptions) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/futures/data/takerBuySellVol",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getBasis(options: IGetBasesOptions) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/futures/data/basis",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }
}
