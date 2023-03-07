import { 
  test, 
  describe, 
  expect,
  beforeEach
} from "@jest/globals";

import { BinanceSpotCryptoLoansApi } from "../../../../api/binance/spot/cryptoLoans";

describe("BinanceSpotConvertApi", () => {
  let api: BinanceSpotCryptoLoansApi;

  beforeEach(() => {
    api = new BinanceSpotCryptoLoansApi({
      enableTestnet: false,
      apiKey: process.env.BINANCE_TESTNET_API_KEY,
      apiSecret: process.env.BINANCE_TESTNET_API_SECRET,
    });
  });

  // describe("getCryptoLoansIncomeHistory", () => {
  //   test("Should get crypto loans income history (USER_DATA) for a specific asset", async () => {
  //     const data = await api.getCryptoLoansIncomeHistory({
  //       asset: "BTC",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get crypto loans income history (USER_DATA) for a specific asset and type", async () => {
  //     const data = await api.getCryptoLoansIncomeHistory({
  //       asset: "BTC",
  //       type: "addCollateral",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get crypto loans income history (USER_DATA) for a specific asset within a specific date range", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.getCryptoLoansIncomeHistory({
  //       asset: "BTC",
  //       endTime,
  //       startTime,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getLoanBorrowHistory", () => {
  //   test("Should get loan borrow history (USER_DATA)", async () => {
  //     const data = await api.getLoanBorrowHistory();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get loan borrow history (USER_DATA) for a specific loan coin", async () => {
  //     const data = await api.getLoanBorrowHistory({
  //       loanCoin: "BUSD",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get loan borrow history (USER_DATA) within a specific date range", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.getLoanBorrowHistory({
  //       endTime,
  //       startTime,
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get loan borrow history (USER_DATA) for a specific collateral coin", async () => {
  //     const data = await api.getLoanBorrowHistory({
  //       collateralCoin: "BNB",
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getLoanOngoingOrders", () => {
  //   test("Should get loan ongoing orders (USER_DATA)", async () => {
  //     const data = await api.getLoanOngoingOrders();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get loan borrow history (USER_DATA) for a specific loan coin", async () => {
  //     const data = await api.getLoanOngoingOrders({
  //       loanCoin: "BUSD",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get loan borrow history (USER_DATA) for a specific collateral coin", async () => {
  //     const data = await api.getLoanOngoingOrders({
  //       collateralCoin: "BNB",
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getLoanRepaymentHistory", () => {
  //   test("Should get loan repayment history (USER_DATA)", async () => {
  //     const data = await api.getLoanRepaymentHistory();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get loan repayment history (USER_DATA) for a specific loan coin", async () => {
  //     const data = await api.getLoanRepaymentHistory({
  //       loanCoin: "BUSD",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get loan repayment history (USER_DATA) for a specific collateral coin", async () => {
  //     const data = await api.getLoanRepaymentHistory({
  //       collateralCoin: "BNB",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get loan repayment history (USER_DATA) within a specific date range", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.getLoanRepaymentHistory({
  //       endTime,
  //       startTime,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getLoanLTVAdjustmentHistory", () => {
  //   test("Should get loan LTV adjusment history (USER_DATA)", async () => {
  //     const data = await api.getLoanLTVAdjustmentHistory();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get loan LTV adjusment history (USER_DATA) for a specific loan coin", async () => {
  //     const data = await api.getLoanLTVAdjustmentHistory({
  //       loanCoin: "BUSD",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get loan LTV adjusment history (USER_DATA) for a specific collateral coin", async () => {
  //     const data = await api.getLoanLTVAdjustmentHistory({
  //       collateralCoin: "BNB",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get loan LTV adjusment history (USER_DATA) within a specific date range", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.getLoanLTVAdjustmentHistory({
  //       endTime,
  //       startTime,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getLoanableAssetsData", () => {
  //   test("Should get loanable asset data (USER_DATA)", async () => {
  //     const data = await api.getLoanLTVAdjustmentHistory();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get loanable asset data (USER_DATA) for a specific loan coin", async () => {
  //     const data = await api.getLoanLTVAdjustmentHistory({
  //       loanCoin: "BUSD",
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getCollateralAssetsData", () => {
  //   test("Should get collateral asset data (USER_DATA)", async () => {
  //     const data = await api.getCollateralAssetsData();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get collateral asset data (USER_DATA) for a collateral loan coin", async () => {
  //     const data = await api.getCollateralAssetsData({
  //       collateralCoin: "BUSD",
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  describe("checkCollateralRepayRate", () => {
    test("Should check collateral repay rate (USER_DATA)", async () => {
      const data = await api.checkCollateralRepayRate({
        collateralCoin: "BUSD",
        loanCoin: "BTC",
        repayAmount: 1,
      });
      expect(data).toBeDefined();
    });
  });
});
