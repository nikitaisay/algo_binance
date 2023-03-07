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

export interface IGetLiquidityOperationRecordOptions {
  poolId?: string;
  operationId?: string;
  operation?: string;
  startTime?: number; // UTC timestamp in ms
  endTime?: number; // UTC timestamp in ms
  limit?: number; // Default 500; max 1000.
  recvWindow?: number; // The value cannot be greater than 60000
}

export interface IGetRequestQuoteOptions {
  quoteAsset: string; //USDT
  baseAsset: string; //BUSD
  quoteQty: number; //
  recvWindow?: number; // The value cannot be greater than 60000
}

export interface IGetSwapHistoryOptions {
  swapId?: number;
  startTime?: number; // UTC timestamp in ms
  endTime?: number; // UTC timestamp in ms
  status?: number; // 0: pending for swap, 1: success, 2: failed
  quoteAsset?: string; // USDT
  baseAsset?: string; // BUSD
  limit?: number; // default 3, max 100
  recvWindow?: number; // The value cannot be greater than 60000
}

export interface IGetPoolConfigureOptions {
  poolId?: number;
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IAddLiquidityPreviewOptions {
  poolId: number;
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
  type: "SINGLE" | "COMBINATION"; // "SINGLE" for adding a single token, "COMBINATION" for adding dual tokens
  quoteAsset: string;
  quoteQty: number;
}

export interface IRemoveLiquidityPreviewOptions {
  poolId: number;
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
  type: "SINGLE" | "COMBINATION"; // "SINGLE" for adding a single token, "COMBINATION" for adding dual tokens
  quoteAsset: string;
  shareAmount: number;
}

export interface IGetUnclaimedRewardsRecordOptions {
  type?: 0 | 1; // 0: Swap rewards, 1: Liquidity rewards, default to 0
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetClaimedHistoryOptions {
  poolId?: number;
  assetRewards?: string;
  type?: 0 | 1; // 0: Swap rewards, 1: Liquidity rewards, default to 0
  startTime?: number; // UTC timestamp in ms
  endTime?: number; // UTC timestamp in ms
  limit?: number; // Default 3, max 100
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetListOfAllConvertPairsOptions {
  fromAsset: string; // User spends coin
  toAsset: string; // User receives coin
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IQueryOrderQuantityPrecisionPerAssetOptions {
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetOrderStatusOptions {
  orderId: string;
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetConvertTradeHistoryOptions {
  startTime: number; // UTC timestamp in ms
  endTime: number; // UTC timestamp in ms
  limit?: number; // default 100, max 1000
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetCryptoLoansIncomeHistoryOptions {
  asset: string;
  type?: "borrowIn" | "collateralSpent" | "repayAmount" | "collateralReturn" | "addCollateral" | "removeCollateral" | "collateralReturnAfterLiquidation"; // All types will be returned by default.
  startTime?: number; // UTC timestamp in ms
  endTime?: number; // UTC timestamp in ms
  limit?: number; // default 100, max 1000
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetLoanBorrowHistoryOptions {
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
  loanCoin?: string;
  collateralCoin?: string;
  orderId?: string; // orderId in POST /sapi/v1/loan/borrow
  startTime?: number; // UTC timestamp in ms
  endTime?: number; // UTC timestamp in ms
  current?: number; // Current querying page. Start from 1; default: 1; max: 1000
  limit?: number; // Default: 10; max: 100.
}

export interface IGetLoanOngoingOrdersOptions {
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
  loanCoin?: string;
  collateralCoin?: string;
  orderId?: string; // orderId in POST /sapi/v1/loan/borrow
  current?: number; // Current querying page. Start from 1; default: 1; max: 1000
  limit?: number; // Default: 10; max: 100.
}

export interface IGetLoanRepaymentHistoryOptions {
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
  loanCoin?: string;
  collateralCoin?: string;
  orderId?: string; // orderId in POST /sapi/v1/loan/borrow
  current?: number; // Current querying page. Start from 1; default: 1; max: 1000
  limit?: number; // Default: 10; max: 100.
  startTime?: number; // UTC timestamp in ms
  endTime?: number; // UTC timestamp in ms
}

export interface IGetLoanLTVAdjustmentHistoryOptions {
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
  loanCoin?: string;
  collateralCoin?: string;
  orderId?: string; // orderId in POST /sapi/v1/loan/borrow
  current?: number; // Current querying page. Start from 1; default: 1; max: 1000
  limit?: number; // Default: 10; max: 100.
  startTime?: number; // UTC timestamp in ms
  endTime?: number; // UTC timestamp in ms
}

export interface IGetLoanableAssetsDataOptions {
  loanCoin?: string;
  vipLevel?: string; // Default: user's vip level. Send "-1" to check specified configuration
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetCollateralAssetsDataOptions {
  collateralCoin?: string;
  vipLevel?: string; // Default: user's vip level. Send "-1" to check specified configuration
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface ICheckCollateralRepayRateOptions {
  collateralCoin: string;
  loanCoin: string;
  repayAmount: number; // repay amount of loanCoin
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetFiatDepositWithdrawHistoryOptions {
  transactionType: 0 | 1; // 0 - deposit, 1 - withdraw
  beginTime?: number; // UTC timestamp in ms
  endTime?: number; // UTC timestamp in ms
  page?: number; // Default 1
  rows?: number; // Default 100, max 500
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}
