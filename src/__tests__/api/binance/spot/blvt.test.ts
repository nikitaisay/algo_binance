import { 
  test, 
  describe, 
  expect,
  beforeEach
} from "@jest/globals";

import { BinanceSpotBLVTApi } from "../../../../api/binance/spot/blvt";

describe("Test Binance Spot BLVT API", () => {
  let api: BinanceSpotBLVTApi;
 
  beforeEach(() => {
    api = new BinanceSpotBLVTApi({
      enableTestnet: false,
      apiKey: process.env.BINANCE_TESTNET_API_KEY,
      apiSecret: process.env.BINANCE_TESTNET_API_SECRET,
    });
  });

  describe("getBLVTInfo", () => {
    test("Should get BLVT info for specific token name", async () => {
      const data = await api.getBLVTInfo({
        tokenName: "BTCDOWN",
      });
      expect(data).toBeDefined();
    });
  });

  // describe("querySubscriptionRecord", () => {
  //   test("Should Query Subscription Record (USER_DATA)", async () => {
  //     const data = await api.querySubscriptionRecord();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should Query Subscription Record (USER_DATA) for specific token name", async () => {
  //     const data = await api.querySubscriptionRecord({
  //       tokenName: "BTCUP",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should Query Subscription Record (USER_DATA) for specific token name within a specific time range", async () => {
  //     const endTime = Date.now(); 
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.querySubscriptionRecord({
  //       tokenName: "BTCUP",
  //       startTime,
  //       endTime,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("queryRedemptionRecord", () => {
  //   test("Should Query Redemption Record (USER_DATA)", async () => {
  //     const data = await api.queryRedemptionRecord();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should Query Redemption Record (USER_DATA) for specific token name", async () => {
  //     const data = await api.queryRedemptionRecord({
  //       tokenName: "BTCUP",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should Query Redemption Record (USER_DATA) for specific token name within a specific time range", async () => {
  //     const endTime = Date.now(); 
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.queryRedemptionRecord({
  //       tokenName: "BTCUP",
  //       startTime,
  //       endTime,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getBLVTUserLimitInfo", () => {
  //   test("Should Get BLVT User Limit Info (USER_DATA)", async () => {
  //     const data = await api.getBLVTUserLimitInfo();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should Get BLVT User Limit Info (USER_DATA) for a specific token name", async () => {
  //     const data = await api.getBLVTUserLimitInfo({
  //       tokenName: "BTCUP",
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });
});
