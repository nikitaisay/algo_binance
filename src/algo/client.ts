import { BinanceSpotC2CApi } from "../api/binance/spot/c2c";
import { BinancePerpetualFuturesMarketApi } from "../api/binance/perpetualFuturesApi/market";
import { BinanceSpotMarketApi } from "../api/binance/spot/market";
import { BinanceEuropeanOptionsMarketApi } from "../api/binance/europeanOptions/market";
import { BinanceDelivaryFuturesMarketApi } from "../api/binance/deliveryFuturesApi/market";
import { IApiClientInitializeOptions } from "../api/binance/types";

import { AlgoBClientInitializeOptions } from "./types";

export class AlgoBinanceClient {
  spot: {
    market: BinanceSpotMarketApi;
    c2c: BinanceSpotC2CApi;
  };

  europeanOptions: {
    market: BinanceEuropeanOptionsMarketApi;
  };

  deliveryFutures: {
    market: BinanceDelivaryFuturesMarketApi;
  };

  perpetualFutures: {
    market: BinancePerpetualFuturesMarketApi;
  };

  constructor(options: AlgoBClientInitializeOptions) {
    this.initializeBinanceApi({
      enableTestnet: options.enableTestnet,
    });
  }

  private initializeBinanceApi(options: IApiClientInitializeOptions) {
    // spot
    this.spot.market = new BinanceSpotMarketApi(options);
    this.spot.c2c = new BinanceSpotC2CApi(options);
    // european options
    this.europeanOptions.market = new BinanceEuropeanOptionsMarketApi(options);
    // delivery futures
    this.deliveryFutures.market = new BinanceDelivaryFuturesMarketApi(options);
    // perpetual futures
    this.perpetualFutures.market = new BinancePerpetualFuturesMarketApi(options);
  }
}
