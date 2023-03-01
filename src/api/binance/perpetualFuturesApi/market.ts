import { BINANCE_API_URLS } from "../../../constants";

import { RequestType } from "../enums";
import { BinanceApiClient } from "../httpClient";
import { IApiClientInitializeOptions } from "../types";

import { 
  IGet24hrTickerPriceChangeStatisticsOptions,
  IGetAggregateTradesListOptions,
  IGetCandlestickDataOptions,
  IGetCompositeIndexSymbolInformationOptionsOptions,
  IGetContinuousContractCandlestickDataOptions,
  IGetFundingRateHistoryOptions,
  IGetHistoricalBLVTNAVKlineCandlestickOptions,
  IGetIndexPriceCandlestickDataOptions,
  IGetMarkPriceCandlestickDataOptions,
  IGetMarkPriceOptions,
  IGetMultiAssetsModeAssetIndexOptions,
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

export class BinancePerpetualFuturesMarketApi extends BinanceApiClient {
  constructor(options: IApiClientInitializeOptions) {
    super(options);
    this.baseApiUrl = BINANCE_API_URLS.PERPETUAL_FUTURES.MARKET.BASE;
    this.testnetUrl = BINANCE_API_URLS.PERPETUAL_FUTURES.MARKET.TESTNET;
    this.url = options.enableTestnet ? this.testnetUrl : this.baseApiUrl;
  }

  async testConnectivity() {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/fapi/v1/ping",
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
        path: "/fapi/v1/time",
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
        path: "/fapi/v1/exchangeInfo",
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
        path: "/fapi/v1/depth",
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
        path: "/fapi/v1/trades",
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
        path: "/fapi/v1/aggTrades",
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
        path: "/fapi/v1/klines",
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
        path: "/fapi/v1/continuousKlines",
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
        path: "/fapi/v1/indexPriceKlines",
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
        path: "/fapi/v1/markPriceKlines",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getMarkPrice(options: IGetMarkPriceOptions) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/fapi/v1/premiumIndex",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getFundingRateHistory(options: IGetFundingRateHistoryOptions) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/fapi/v1/fundingRate",
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
        path: "/fapi/v1/ticker/24hr",
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
        path: "/fapi/v1/ticker/price",
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
        path: "/fapi/v1/ticker/bookTicker",
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
        path: "/fapi/v1/openInterest",
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
        path: "/futures/data/takerlongshortRatio",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getHistoricalBLVTNAVKlineCandlestick(options: IGetHistoricalBLVTNAVKlineCandlestickOptions) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/fapi/v1/lvtKlines",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getMultiAssetsModeAssetIndex(options: IGetMultiAssetsModeAssetIndexOptions = {}) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/fapi/v1/assetIndex",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getCompositeIndexSymbolInformation(options: IGetCompositeIndexSymbolInformationOptionsOptions = {}) {
    try {
      const res = await this.publicRequest({
        method: RequestType.GET,
        path: "/fapi/v1/indexInfo",
        params: options,
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }
}
