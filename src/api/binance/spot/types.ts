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

export interface IGetFuturesAccountTransactionHistoryListOptions {
  asset: string;
  startTime: number;
  endTime?: number;
  current?: number; // Currently querying page. Start from 1. Default:1
  size?: number; // Default:10 Max:100
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetCrossCollateralBorrowHistoryOptions {
  coin?: string;
  startTime?: number;
  endTime?: number;
  limit?: number; // default 500, max 1000
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetCrossCollateralRepaymentHistoryOptions {
  coin?: string;
  startTime?: number;
  endTime?: number;
  limit?: number; // default 500, max 1000
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetCrossCollateralWalletV2Options {
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IAdjustCrossCollateralLTVHistoryOptions {
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
  loanCoin?: string;
  collateralCoin?: string;
  startTime?: number;
  endTime?: number;
  limit?: number; // default 500, max 1000
}

export interface IGetCrossCollateralLiquidationHistoryOptions {
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
  loanCoin?: string;
  collateralCoin?: string;
  startTime?: number;
  endTime?: number;
  limit?: number; // default 500, max 1000
}

export interface IGetCrossCollateralInterestHistoryOptions {
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
  collateralCoin?: string;
  startTime?: number;
  endTime?: number;
  limit?: number; // default 500, max 1000
  current?: number; // Currently querying page. Start from 1. Default:1
}

export interface IVerifyBinanceCodeOptions {
  referenceNo: string; // reference number
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetTokenLimitOptions {
  baseToken: string; // The token you want to pay, example: BUSD
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetRSAPublicKeyOptions {
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetCrossMarginTransferHistoryOptions {
  asset?: string;
  type?: "ROLL_IN" | "ROLL_OUT"; // Transfer Type
  startTime?: number; // UTC timestamp in ms
  endTime?: number; // UTC timestamp in ms
  current?: number; // Current querying page. Start from 1. Default:1
  size?: number; // Default:10 Max:100
  archived?: boolean; // Default: false. Set to true for archived data from 6 months ago
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetDetailMinerListOptions {
  algo: string; // Algorithm(sha256)
  userName: string; // Mining Account
  workerName: string; // Miner’s name
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetMinerListOptions {
  algo: string; // Algorithm(sha256)
  userName: string; // Mining Account
  pageIndex?: number; // Page number, default is first page, start form 1
  sort?: 0 | 1; // sort sequence（default=0）0 positive sequence, 1 negative sequence
  sortColumn?: 1 | 2 | 3 | 4 | 5; // Sort by( default 1): 1: miner name, 2: real-time computing power, 3: daily average computing power, 4: real-time rejection rate, 5: last submission time
  workerStatus?: 0 | 1 | 2 | 3; // miners status（default=0）0 all, 1 valid, 2 invalid, 3 failure
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetEarningsListOptions {
  algo: string; // Algorithm(sha256)
  userName: string; // Mining Account
  coin?: string; // Coin name
  startDate?: number; // Search date, millisecond timestamp, while empty query all
  endDate?: number; // Search date, millisecond timestamp, while empty query all
  pageIndex?: number; // Number of pages, minimum 10, maximum 200
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetExtraBonusListOptions {
  algo: string; // Algorithm(sha256)
  userName: string; // Mining Account
  coin?: string; // Coin name
  startDate?: number; // Search date, millisecond timestamp, while empty query all
  endDate?: number; // Search date, millisecond timestamp, while empty query all
  pageIndex?: number; // Number of pages, minimum 10, maximum 200
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetHashrateResaleListOptions {
  pageIndex?: number; // Page number, default is first page, start form 1
  pageSize?: number; // Number of pages, minimum 10, maximum 200
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetHashrateResaleDetailOptions {
  configId: number; // Mining ID
  userName: string; // Mining Account
  pageIndex?: number; // Page number, default is first page, start form 1
  pageSize?: number; // Number of pages, minimum 10, maximum 200
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetStatisticListOptions {
  algo: string; // Algorithm(sha256)
  userName: string; // Mining Account
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetAccountListOptions {
  algo: string; // Algorithm(sha256)
  userName: string; // Mining Account
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetMiningAccountEarningOptions {
  algo: string; // Algorithm(sha256)
  userName: string; // Mining Account
  startDate?: number; // Search date, millisecond timestamp, while empty query all
  endDate?: number; // Search date, millisecond timestamp, while empty query all
  pageIndex?: number; // Page number, default is first page, start form 1
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetNftTransactionHistoryOptions {
  orderType: 0 | 1 | 2 | 3 | 4; // 0: purchase order, 1: sell order, 2: royalty income, 3: primary market order, 4: mint fee
  startTime?: number; // UTC timestamp in ms
  endTime?: number; // UTC timestamp in ms
  limit?: number; // Default 50, Max 50
  page?: number; // Default 1
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetNftDepositHistoryOptions {
  startTime?: number; // UTC timestamp in ms
  endTime?: number; // UTC timestamp in ms
  limit?: number; // Default 50, Max 50
  page?: number; // Default 1
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetNftWithdrawHistoryOptions {
  startTime?: number; // UTC timestamp in ms
  endTime?: number; // UTC timestamp in ms
  limit?: number; // Default 50, Max 50
  page?: number; // Default 1
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetNftAssetOptions {
  limit?: number; // Default 50, Max 50
  page?: number; // Default 1
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetPayTradeHistoryOptions {
  startTime?: number; // UTC timestamp in ms
  endTime?: number; // UTC timestamp in ms
  limit?: number; // Default 50, Max 50
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetPortfolioMarginAccountInfoOptions {
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetSpotRebateHistoryRecordsOptions {
  startTime?: number; // UTC timestamp in ms
  endTime?: number; // UTC timestamp in ms
  page?: number; // default 1
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetInterestHistoryOptions {
  lendingType: "DAILY" | "ACTIVITY" | "CUSTOMIZED_FIXED";
  asset?: string;
  startTime?: number; // UTC timestamp in ms
  endTime?: number; // UTC timestamp in ms
  current?: number; // Current querying page. Start from 1. Default:1
  size?: number; // Default:10 Max:100
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetFlexibleProductListOptions {
  status?: string; // Default `ALL`
  featured?: string; // Default `ALL`
  current?: number; // Current querying page. Start from 1. Default:1
  size?: number; // Default:10 Max:100
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetLeftDailyPurchaseQuotaOfFlexibleProductOptions {
  productId: string;
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetLeftDailyRedemptionQuotaOfFlexibleProductOptions {
  productId: string;
  type: "FAST" | "NORMAL";
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetFlexibleProductPositionOptions {
  asset: string;
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetFixedAndActivityProjectListOptions {
  asset?: string;
  type: "ACTIVITY" | "CUSTOMIZED_FIXED";
  status?: string; // Default `ALL`
  isSortAsc?: boolean; // default "true"
  sortBy?: string; // Default `START_TIME`
  current?: number; // Current querying page. Start from 1. Default:1
  size?: number; // Default:10 Max:100
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetFixedActivityProjectPositionOptions {
  asset: string;
  projectId?: string;
  status?: string; // Default `ALL`
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetLendingAccountOptions {
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetPurchaseRecordOptions {
  lendingType: "DAILY" | "ACTIVITY" | "CUSTOMIZED_FIXED";
  asset?: string;
  startTime?: number; // UTC timestamp in ms
  endTime?: number; // UTC timestamp in ms
  current?: number; // Current querying page. Start from 1. Default:1
  size?: number; // Default:10 Max:100
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}

export interface IGetRedemptionRecordOptions {
  lendingType: "DAILY" | "ACTIVITY" | "CUSTOMIZED_FIXED";
  asset?: string;
  startTime?: number; // UTC timestamp in ms
  endTime?: number; // UTC timestamp in ms
  current?: number; // Current querying page. Start from 1. Default:1
  size?: number; // Default:10 Max:100
  recvWindow?: number; // default 5000 The value cannot be greater than 60000
}
