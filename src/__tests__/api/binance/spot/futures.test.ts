import { 
  test, 
  describe, 
  expect,
  beforeEach
} from "@jest/globals";

import { BinanceSpotFuturesApi } from "../../../../api/binance/spot/futures";

describe("BinanceSpotFuturesApi", () => {
  let api: BinanceSpotFuturesApi;

  beforeEach(() => {
    api = new BinanceSpotFuturesApi({
      enableTestnet: false,
      apiKey: process.env.BINANCE_TESTNET_API_KEY,
      apiSecret: process.env.BINANCE_TESTNET_API_SECRET,
    });
  });

  describe("getFuturesAccountTransactionHistoryList", () => {
    test("Should get futures account transaction history list", async () => {
      const endTime = Date.now();
      const startTime = endTime - 86400000; // 24 hours ago
      const data = await api.getFuturesAccountTransactionHistoryList({
        asset: "USDT",
        startTime,
      });
      expect(data).toBeDefined();
    });
  });

  // describe("getCrossCollateralBorrowHistory", () => {
  //   test("Should get cross-collateral borrow history list", async () => {
  //     const data = await api.getCrossCollateralBorrowHistory();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get cross-collateral borrow history list for a specific coin", async () => {
  //     const data = await api.getCrossCollateralBorrowHistory({
  //       coin: "USDT",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get cross-collateral borrow history list within a specific date range", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.getCrossCollateralBorrowHistory({
  //       startTime,
  //       endTime,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getCrossCollateralRepaymentHistory", () => {
  //   test("Should get cross-collateral repayment history list", async () => {
  //     const data = await api.getCrossCollateralBorrowHistory();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get cross-collateral repayment history list for a specific coin", async () => {
  //     const data = await api.getCrossCollateralBorrowHistory({
  //       coin: "USDT",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get cross-collateral repayment history list within a specific date range", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.getCrossCollateralBorrowHistory({
  //       startTime,
  //       endTime,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getCrossCollateralWalletV2", () => {
  //   test("Should get cross-collateral wallet v2", async () => {
  //     const data = await api.getCrossCollateralWalletV2();
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("adjustCrossCollateralLTVHistory", () => {
  //   test("Should adjust cross-collateral LTV history", async () => {
  //     const data = await api.adjustCrossCollateralLTVHistory();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should adjust cross-collateral LTV history for a specific loan coin", async () => {
  //     const data = await api.adjustCrossCollateralLTVHistory({
  //       loanCoin: "USDT",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should adjust cross-collateral LTV history for a specific collateral coin", async () => {
  //     const data = await api.adjustCrossCollateralLTVHistory({
  //       collateralCoin: "USDT",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should adjust cross-collateral LTV history within a specific date range", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.adjustCrossCollateralLTVHistory({
  //       startTime,
  //       endTime,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getCrossCollateralLiquidationHistory", () => {
  //   test("Should get cross-collateral liquidation history", async () => {
  //     const data = await api.getCrossCollateralLiquidationHistory();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get cross-collateral liquidation history for a specific loan coin", async () => {
  //     const data = await api.getCrossCollateralLiquidationHistory({
  //       loanCoin: "USDT",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get cross-collateral liquidation history for a specific collateral coin", async () => {
  //     const data = await api.getCrossCollateralLiquidationHistory({
  //       collateralCoin: "USDT",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get cross-collateral liquidation history within a specific date range", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.getCrossCollateralLiquidationHistory({
  //       startTime,
  //       endTime,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getCrossCollateralInterestHistory", () => {
  //   test("Should get cross-collateral interest history", async () => {
  //     const data = await api.getCrossCollateralInterestHistory();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get cross-collateral interest history for a specific collateral coin", async () => {
  //     const data = await api.getCrossCollateralInterestHistory({
  //       collateralCoin: "USDT",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get cross-collateral interest history within a specific date range", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.getCrossCollateralInterestHistory({
  //       startTime,
  //       endTime,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });
});

