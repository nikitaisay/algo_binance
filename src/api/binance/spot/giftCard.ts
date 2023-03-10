import { BINANCE_API_URLS } from "../../../constants";

import { RequestType } from "../enums";
import { BinanceApiClient } from "../httpClient";
import { IApiClientInitializeOptions } from "../types";

import { 
  IGetRSAPublicKeyOptions,
  IGetTokenLimitOptions,
  IVerifyBinanceCodeOptions 
} from "./types";

export class BinanceSpotGiftCardsApi extends BinanceApiClient {
  constructor(options: IApiClientInitializeOptions) {
    super(options);
    this.baseApiUrl = BINANCE_API_URLS.SPOT.BASE;
    this.testnetUrl = BINANCE_API_URLS.SPOT.TESTNET;
    this.url = options.enableTestnet ? this.testnetUrl : this.baseApiUrl;
  }

  // Please note that if you enter the wrong Gift Card Number 5 times within an hour, 
  // you will no longer be able to verify any Gift Card Number for that hour.
  async verifyBinanceCode(options: IVerifyBinanceCodeOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/giftcard/verify",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  async getTokenLimit(options: IGetTokenLimitOptions) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/giftcard/buyCode/token-limit",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }

  // Please note that the RSA Public key fetched is valid only for the current day.
  async getRSAPublicKey(options: IGetRSAPublicKeyOptions = {}) {
    try {
      const res = await this.privateRequest({
        method: RequestType.GET,
        path: "/sapi/v1/giftcard/cryptography/rsa-public-key",
        params: options,
      });
      return res;
    } catch (error) {
      this.throwError(error?.response?.data);
    }
  }
}
