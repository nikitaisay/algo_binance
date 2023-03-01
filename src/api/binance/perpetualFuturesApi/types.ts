export interface IGetOrderBookOptions {
  symbol: string;
  limit?: number; // Default 100; max 1000. Valid limits:[5, 10, 20, 50, 100, 500, 1000]
}

export interface IGetRecentTradesOptions {
  symbol: string;
  limit?: number; // Default 500; max 1000.
}

export interface IGetAggregateTradesListOptions {
  symbol: string;
  fromId?: string;
  startTime?: number;
  endTime?: number;
  limit?: number; // Default 500; max 1000.
}

export interface IGetCandlestickDataOptions {
  symbol: string;
  interval: string; // 1m, 1h, 1d
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface IGetContinuousContractCandlestickDataOptions {
  pair: string;
  interval: string; // 1m, 1h, 1d, etc
  contractType: string; // "PERPETUAL" | "CURRENT_QUARTER" | "NEXT_QUARTER";
  startTime?: number;
  endTime?: number;
  limit?: number; // Default 100; max 1000
}

export interface IGetIndexPriceCandlestickDataOptions {
  pair: string;
  interval: string; // 1m, 1h, 1d, etc
  startTime?: number;
  endTime?: number;
  limit?: number; // Default 500; max 1500
}

export interface IGetMarkPriceCandlestickDataOptions {
  symbol: string;
  interval: string; // 1m, 1h, 1d, etc
  startTime?: number;
  endTime?: number;
  limit?: number; // Default 500; max 1500
}

export interface IGetMarkPriceOptions {
  symbol: string;
}

export interface IGetFundingRateHistoryOptions {
  symbol: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface IGet24hrTickerPriceChangeStatisticsOptions {
  symbol?: string;
  pair?: string;
}

export interface IGetSymbolPriceTickerOptions {
  symbol?: string;
  pair?: string;
}

export interface IGetSymbolOrderBookTickerOptions {
  symbol?: string;
  pair?: string;
}

export interface IGetOpenInterestOptions {
  symbol: string;
}

export interface IGetOpenInterestStatisticsOptions {
  symbol: string;
  period: string; // "5m","15m","30m","1h","2h","4h","6h","12h","1d"
  limit?: number;
  startTime?: number;
  endTime?: number;
}

export interface IGetTopTraderLongShortRatioAccountsOptions {
  symbol: string;
  period: string; // "5m","15m","30m","1h","2h","4h","6h","12h","1d"
  limit?: number;
  startTime?: number;
  endTime?: number;
}

export interface IGetTopTraderLongShortRatioPostionsOptions {
  symbol: string;
  period: string; // "5m","15m","30m","1h","2h","4h","6h","12h","1d"
  limit?: number;
  startTime?: number;
  endTime?: number;
}

export interface IGetTakerBuySellVolumeOptions {
  symbol: string;
  period: string; // "5m","15m","30m","1h","2h","4h","6h","12h","1d"
  limit?: number;
  startTime?: number;
  endTime?: number;
}

export interface IGetHistoricalBLVTNAVKlineCandlestickOptions {
  symbol: string;
  interval: string; // "5m","15m","30m","1h","2h","4h","6h","12h","1d"
  limit?: number; // default 500, max 1000
  startTime?: number;
  endTime?: number;
}

export interface IGetMultiAssetsModeAssetIndexOptions {
  symbol?: string;
}

export interface IGetCompositeIndexSymbolInformationOptionsOptions {
  symbol?: string;
}
