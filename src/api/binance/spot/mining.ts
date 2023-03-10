import { BINANCE_API_URLS } from "../../../constants";

import { RequestType } from "../enums";
import { BinanceApiClient } from "../httpClient";
import { IApiClientInitializeOptions } from "../types";

import { 
  IGetAccountListOptions,
  IGetDetailMinerListOptions, 
  IGetEarningsListOptions, 
  IGetExtraBonusListOptions, 
  IGetHashrateResaleDetailOptions, 
  IGetHashrateResaleListOptions, 
  IGetMinerListOptions, 
  IGetMiningAccountEarningOptions, 
  IGetStatisticListOptions
} from "./types";

export class BinanceSpotMiningApi extends BinanceApiClient {
  constructor(options: IApiClientInitializeOptions) {
    super(options);
    this.baseApiUrl = BINANCE_API_URLS.SPOT.BASE;
    this.testnetUrl = BINANCE_API_URLS.SPOT.TESTNET;
    this.url = options.enableTestnet ? this.testnetUrl : this.baseApiUrl;
  }

  async getAcquiringAlgorithm() {
    try {
      const res = await this.keyedRequest({
        method: RequestType.GET,
        path: "/sapi/v1/mining/pub/algoList",
      });
      return res.data;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getAcquiringCoinName() {
    try {
      const res = await this.keyedRequest({
        method: RequestType.GET,
        path: "/sapi/v1/mining/pub/coinList",
      });
      return res.data;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getDetailMinerList(options: IGetDetailMinerListOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/mining/worker/detail",
        params: options,
      });
      return res.data;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getMinerList(options: IGetMinerListOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/mining/worker/list",
        params: options,
      });
      return res.data;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getEarningsList(options: IGetEarningsListOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/mining/payment/list",
        params: options,
      });
      return res.data;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getExtraBonusList(options: IGetExtraBonusListOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/mining/payment/other",
        params: options,
      });
      return res.data;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getHashrateResaleList(options: IGetHashrateResaleListOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/mining/hash-transfer/config/details/list",
        params: options,
      });
      return res.data;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getHashrateResaleDetail(options: IGetHashrateResaleDetailOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/mining/hash-transfer/profit/details",
        params: options,
      });
      return res.data;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getStatisticList(options: IGetStatisticListOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/mining/statistics/user/status",
        params: options,
      });
      return res.data;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getAccountList(options: IGetAccountListOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/mining/statistics/user/list",
        params: options,
      });
      return res.data;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getMiningAccountEarning(options: IGetMiningAccountEarningOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/mining/payment/uid",
        params: options,
      });
      console.log(res);
      return res.data;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }
}
