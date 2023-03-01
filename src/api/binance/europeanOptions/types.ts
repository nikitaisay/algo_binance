export interface IGetOrderBookOptions {
  symbol: string;
  limit?: number; // Default 100; max 1000. Valid limits:[5, 10, 20, 50, 100, 500, 1000]
}

export interface IGetRecentTradesOptions {
  symbol: string;
  limit?: number; // Default 500; max 1000
}

export interface IGetCandlestickDataOptions {
  symbol: string;
  interval: string; // 1m, 1h, 1d, etc
  startTime?: number;
  endTime?: number;
  limit?: number; // Default 100; max 1000
}

export interface IGetOptionMarkPriceOptions {
  symbol?: string;
}

export interface IGet24hrTickerPriceChangeStatisticsOptions {
  symbol?: string;
}

export interface IGetSymbolPriceTickerOptions {
  underlying: string; // Spot pair（Option contract underlying asset）
}

export interface IGetHistoricalExerciseRecordsOptions {
  startTime?: number;
  endTime?: number;
  limit?: number; // Default 100; max 100
}
