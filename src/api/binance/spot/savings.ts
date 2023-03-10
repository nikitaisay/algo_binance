import { BINANCE_API_URLS } from "../../../constants";

import { RequestType } from "../enums";
import { BinanceApiClient } from "../httpClient";
import { IApiClientInitializeOptions } from "../types";

import { 
  IGetFixedActivityProjectPositionOptions,
  IGetFixedAndActivityProjectListOptions,
  IGetFlexibleProductListOptions, 
  IGetFlexibleProductPositionOptions, 
  IGetInterestHistoryOptions, 
  IGetLeftDailyPurchaseQuotaOfFlexibleProductOptions,
  IGetLeftDailyRedemptionQuotaOfFlexibleProductOptions,
  IGetLendingAccountOptions,
  IGetPurchaseRecordOptions,
  IGetRedemptionRecordOptions
} from "./types";

export class BinanceSpotSavingsApi extends BinanceApiClient {
  constructor(options: IApiClientInitializeOptions) {
    super(options);
    this.baseApiUrl = BINANCE_API_URLS.SPOT.BASE;
    this.testnetUrl = BINANCE_API_URLS.SPOT.TESTNET;
    this.url = options.enableTestnet ? this.testnetUrl : this.baseApiUrl;
  }

  async getInterestHistory(options: IGetInterestHistoryOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/lending/union/interestHistory",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getFlexibleProductList(options: IGetFlexibleProductListOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/lending/daily/product/list",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getLeftDailyPurchaseQuotaOfFlexibleProduct(options: IGetLeftDailyPurchaseQuotaOfFlexibleProductOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/lending/daily/userLeftQuota",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getLeftDailyRedemptionQuotaOfFlexibleProduct(options: IGetLeftDailyRedemptionQuotaOfFlexibleProductOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/lending/daily/userRedemptionQuota",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getFlexibleProductPosition(options: IGetFlexibleProductPositionOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/lending/daily/token/position",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getFixedAndActivityProjectList(options: IGetFixedAndActivityProjectListOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/lending/project/list",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getFixedActivityProjectPosition(options: IGetFixedActivityProjectPositionOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/lending/project/position/list",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getLendingAccount(options: IGetLendingAccountOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/lending/union/account",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getPurchaseRecord(options: IGetPurchaseRecordOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/lending/union/purchaseRecord",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getRedemptionRecord(options: IGetRedemptionRecordOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/lending/union/redemptionRecord",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }
}
