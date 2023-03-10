import { BINANCE_API_URLS } from "../../../constants";

import { RequestType } from "../enums";
import { BinanceApiClient } from "../httpClient";
import { IApiClientInitializeOptions } from "../types";

import { 
  IGetFuturesAccountTransactionHistoryListOptions, 
  IGetCrossCollateralBorrowHistoryOptions,
  IGetCrossCollateralRepaymentHistoryOptions,
  IGetCrossCollateralWalletV2Options,
  IAdjustCrossCollateralLTVHistoryOptions,
  IGetCrossCollateralLiquidationHistoryOptions,
  IGetCrossCollateralInterestHistoryOptions
} from "./types";

export class BinanceSpotFuturesApi extends BinanceApiClient {
  constructor(options: IApiClientInitializeOptions) {
    super(options);
    this.baseApiUrl = BINANCE_API_URLS.SPOT.BASE;
    this.testnetUrl = BINANCE_API_URLS.SPOT.TESTNET;
    this.url = options.enableTestnet ? this.testnetUrl : this.baseApiUrl;
  }

  async getFuturesAccountTransactionHistoryList(options: IGetFuturesAccountTransactionHistoryListOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/futures/transfer",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getCrossCollateralBorrowHistory(options: IGetCrossCollateralBorrowHistoryOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/futures/loan/borrow/history",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getCrossCollateralRepaymentHistory(options: IGetCrossCollateralRepaymentHistoryOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/futures/loan/repay/history",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getCrossCollateralWalletV2(options: IGetCrossCollateralWalletV2Options = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v2/futures/loan/wallet",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async adjustCrossCollateralLTVHistory(options: IAdjustCrossCollateralLTVHistoryOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/futures/loan/adjustCollateral/history",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getCrossCollateralLiquidationHistory(options: IGetCrossCollateralLiquidationHistoryOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/futures/loan/liquidationHistory",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getCrossCollateralInterestHistory(options: IGetCrossCollateralInterestHistoryOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/futures/loan/interestHistory",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }
}
