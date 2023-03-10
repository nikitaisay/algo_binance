import { BINANCE_API_URLS } from "../../../constants";

import { RequestType } from "../enums";
import { BinanceApiClient } from "../httpClient";
import { IApiClientInitializeOptions } from "../types";

import { 
  ICheckCollateralRepayRateOptions,
  IGetCollateralAssetsDataOptions,
  IGetCryptoLoansIncomeHistoryOptions, 
  IGetLoanableAssetsDataOptions, 
  IGetLoanBorrowHistoryOptions,
  IGetLoanLTVAdjustmentHistoryOptions,
  IGetLoanOngoingOrdersOptions,
  IGetLoanRepaymentHistoryOptions
} from "./types";

export class BinanceSpotCryptoLoansApi extends BinanceApiClient {
  constructor(options: IApiClientInitializeOptions) {
    super(options);
    this.baseApiUrl = BINANCE_API_URLS.SPOT.BASE;
    this.testnetUrl = BINANCE_API_URLS.SPOT.TESTNET;
    this.url = options.enableTestnet ? this.testnetUrl : this.baseApiUrl;
  }

  async getCryptoLoansIncomeHistory(options: IGetCryptoLoansIncomeHistoryOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/loan/income",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getLoanBorrowHistory(options: IGetLoanBorrowHistoryOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/loan/borrow/history",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getLoanOngoingOrders(options: IGetLoanOngoingOrdersOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/loan/ongoing/orders",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getLoanRepaymentHistory(options: IGetLoanRepaymentHistoryOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/loan/repay/history",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getLoanLTVAdjustmentHistory(options: IGetLoanLTVAdjustmentHistoryOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/loan/ltv/adjustment/history",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getLoanableAssetsData(options: IGetLoanableAssetsDataOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/loan/loanable/data",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getCollateralAssetsData(options: IGetCollateralAssetsDataOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/loan/collateral/data",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async checkCollateralRepayRate(options: ICheckCollateralRepayRateOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/loan/repay/collateral/rate",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }
}
