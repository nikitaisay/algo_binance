import { BINANCE_API_URLS } from "../../../constants";

import { RequestType } from "../enums";
import { BinanceApiClient } from "../httpClient";
import { IApiClientInitializeOptions } from "../types";

import { 
  IGetLiquidityInformationOfPoolOptions, 
  IGetLiquidityOperationRecordOptions,
  IGetRequestQuoteOptions,
  IGetSwapHistoryOptions,
  IGetPoolConfigureOptions,
  IAddLiquidityPreviewOptions,
  IRemoveLiquidityPreviewOptions,
  IGetUnclaimedRewardsRecordOptions,
  IGetClaimedHistoryOptions
} from "./types";


export class BinanceSpotBSwapApi extends BinanceApiClient {
  constructor(options: IApiClientInitializeOptions) {
    super(options);
    this.baseApiUrl = BINANCE_API_URLS.SPOT.MARKET.BASE;
    this.testnetUrl = BINANCE_API_URLS.SPOT.MARKET.TESTNET;
    this.url = options.enableTestnet ? this.testnetUrl : this.baseApiUrl;
  }

  async getAllSwapPools() {
    try {
      const res = await this.keyedRequest({
        method: RequestType.GET,
        path: "/sapi/v1/bswap/pools",
      });
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getLiquidityInformationOfPool(options: IGetLiquidityInformationOfPoolOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/bswap/liquidity",
        params: options,
      });
      return res;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getLiquidityOperationRecord(options: IGetLiquidityOperationRecordOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/bswap/liquidityOps",
        params: options,
      });
      return res;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getRequestQuote(options: IGetRequestQuoteOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/bswap/quote",
        params: options,
      });
      return res;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getSwapHistory(options: IGetSwapHistoryOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/bswap/swap",
        params: options,
      });
      return res;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getPoolConfigure(options: IGetPoolConfigureOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/bswap/poolConfigure",
        params: options,
      });
      return res;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async addLiquidityPreview(options: IAddLiquidityPreviewOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/bswap/addLiquidityPreview",
        params: options,
      });
      return res;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async removeLiquidityPreview(options: IRemoveLiquidityPreviewOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/bswap/removeLiquidityPreview",
        params: options,
      });
      return res;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getUnclaimedRewardsRecord(options: IGetUnclaimedRewardsRecordOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/bswap/unclaimedRewards",
        params: options,
      });
      return res;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }

  async getClaimedHistory(options: IGetClaimedHistoryOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/bswap/claimedHistory",
        params: options,
      });
      return res;
    } catch (error) {
      console.log("error", error?.response?.data);
      this.throwError(error?.response?.data);
    }
  }
}
