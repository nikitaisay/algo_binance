export interface IGetExchangeInfoOptions {
  symbol?: string;
  symbols?: string[];
  permissions?: string | string[]; // SPOT or MARGIN or LEVERAGED
}

export interface IGetOrderBookOptions {
  symbol: string;
  limit?: number; // If limit > 5000, then the response will truncate to 5000
}

export interface IGetRecentTradesListOptions {
  symbol: string;
  limit?: number; // Default 500; max 1000.
}

export interface IGetAggregateTradesListOptions {
  symbol: string;
  limit?: number; // Default 500; max 1000
  fromId?: string;
  startTime?: number;
  endTime?: number;
}

export interface IGetCandlestickDataOptions {
  symbol: string;
  interval: string; // 1m, 1h, 1d, etc
  startTime?: number;
  endTime?: number;
  limit?: number; // Default 100; max 1000
}

export interface IGetCurrentAveragePriceOptions {
  symbol: string;
}

export interface IGet24hrTickerPriceChangeStatisticsOptions {
  symbol?: string;
  symbols?: string[];
  type?: string; // Supported values: FULL or MINI.
}

export interface IGetSymbolPriceTickerOptions {
  symbol?: string;
  symbols?: string[];
}

export interface IGetSymbolOrderBookTickerOptions {
  symbol?: string;
  symbols?: string[];
}

export interface IGetRollingWindowPriceChangeStatisticsOptions {
  symbol?: string;
  symbols?: string[]; // Either symbol or symbols must be provided
  windowSize?: string; // 1d 1m 1h etc
  type?: string; // FULL or MINI
}

export interface IGetC2CTradeHistoryOptions {
  tradeType: "BUY" | "SELL";
  startTimestamp?: number; // UTC timestamp in ms
  endTimestamp?: number; // UTC timestamp in ms
  page?: number; // Default 1
  rows?: number; // default 100, max 100
  recvWindow?: number; // The value cannot be greater than 60000
}

export interface IGetBLVTInfoOptions {
  tokenName: string; // BTCDOWN, BTCUP
}

export interface IQuerySubscriptionRecordOptions {
  tokenName?: string; // BTCDOWN, BTCUP
  id?: string;
  startTime?: number; // UTC timestamp in ms
  endTime?: number; // UTC timestamp in ms
  limit?: number; // Default 500; max 1000.
  recvWindow?: number; // The value cannot be greater than 60000
}

export interface IQueryRedemptionRecordOptions {
  tokenName?: string; // BTCDOWN, BTCUP
  id?: string;
  startTime?: number; // UTC timestamp in ms
  endTime?: number; // UTC timestamp in ms
  limit?: number; // Default 500; max 1000.
  recvWindow?: number; // The value cannot be greater than 60000
}

export interface IGetBLVTUserLimitInfoOptions {
  tokenName?: string; // BTCDOWN, BTCUP
  recvWindow?: number; // The value cannot be greater than 60000
}

export interface IGetLiquidityInformationOfPoolOptions {
  poolId?: string;
  recvWindow?: number; // The value cannot be greater than 60000
}
