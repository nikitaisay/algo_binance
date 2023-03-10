import { 
  test, 
  describe, 
  expect,
  beforeEach
} from "@jest/globals";

import { BinanceSpotSavingsApi } from "../../../../api/binance/spot/savings";

describe("BinanceSpotRebateApi", () => {
  let api: BinanceSpotSavingsApi;

  beforeEach(() => {
    api = new BinanceSpotSavingsApi({
      enableTestnet: false, // BINANCE TESTNET DOESN'T SUPPORT /sapi ENDPOINTS
      apiKey: process.env.BINANCE_API_KEY,
      apiSecret: process.env.BINANCE_API_SECRET,
    });
  });

  test("Should check that api client is defined", () => {
    expect(api).toBeDefined();
  });

  describe("getInterestHistory", () => {
    test("Should get interest history for activity", async () => {
      const data = await api.getInterestHistory({
        lendingType: "ACTIVITY",
      });
      expect(data).toBeDefined();
    });

    test("Should get interest history for daily", async () => {
      const data = await api.getInterestHistory({
        lendingType: "DAILY",
      });
      expect(data).toBeDefined();
    });

    test("Should get interest history for customized fixed", async () => {
      const data = await api.getInterestHistory({
        lendingType: "CUSTOMIZED_FIXED",
      });
      expect(data).toBeDefined();
    });

    test("Should get interest history for activity within a specific date range", async () => {
      const endTime = Date.now();
      const startTime = endTime - 86400000; // 24 hours ago
      const data = await api.getInterestHistory({
        lendingType: "ACTIVITY",
        startTime,
        endTime,
      });
      expect(data).toBeDefined();
    });
  });

  describe("getFlexibleProductList", () => {
    test("Should get flexible product list", async () => {
      const data = await api.getFlexibleProductList();
      expect(data).toBeDefined();
    });
  });

  describe("getFlexibleProductPosition", () => {
    test("Should get flexible product position", async () => {
      const data = await api.getFlexibleProductPosition({
        asset: "BTC",
      });
      expect(data).toBeDefined();
    });
  });

  describe("getFixedAndActivityProjectList", () => {
    test("Should get fixed and activity project list for activity type", async () => {
      const data = await api.getFixedAndActivityProjectList({
        type: "ACTIVITY",
      });
      expect(data).toBeDefined();
    });

    test("Should get fixed and activity project list for customized fixed type", async () => {
      const data = await api.getFixedAndActivityProjectList({
        type: "CUSTOMIZED_FIXED",
      });
      expect(data).toBeDefined();
    });

    test("Should get fixed and activity project list for activity type for a specific asset", async () => {
      const data = await api.getFixedAndActivityProjectList({
        type: "ACTIVITY",
        asset: "BTC",
      });
      expect(data).toBeDefined();
    });
  });

  describe("getFixedActivityProjectPosition", () => {
    test("Should get fixed/activity project position", async () => {
      const data = await api.getFlexibleProductPosition({
        asset: "BTC",
      });
      expect(data).toBeDefined();
    });
  });

  describe("getLendingAccount", () => {
    test("Should get lending account", async () => {
      const data = await api.getLendingAccount();
      expect(data).toBeDefined();
    });
  });

  describe("getPurchaseRecord", () => {
    test("Should get purchase record for activity", async () => {
      const data = await api.getPurchaseRecord({
        lendingType: "ACTIVITY",
      });
      expect(data).toBeDefined();
    });

    test("Should get purchase record for daily", async () => {
      const data = await api.getPurchaseRecord({
        lendingType: "DAILY",
      });
      expect(data).toBeDefined();
    });

    test("Should get purchase record for customized fixed", async () => {
      const data = await api.getPurchaseRecord({
        lendingType: "CUSTOMIZED_FIXED",
      });
      expect(data).toBeDefined();
    });

    test("Should get purchase record for customized fixed for a specific asset", async () => {
      const data = await api.getPurchaseRecord({
        lendingType: "CUSTOMIZED_FIXED",
        asset: "BNB",
      });
      expect(data).toBeDefined();
    });

    test("Should get purchase record for activity within a specific date range", async () => {
      const endTime = Date.now();
      const startTime = endTime - 86400000; // 24 hours ago
      const data = await api.getPurchaseRecord({
        lendingType: "ACTIVITY",
        startTime,
        endTime,
      });
      expect(data).toBeDefined();
    });
  });

  describe("getRedemptionRecord", () => {
    test("Should get redemption record for activity", async () => {
      const data = await api.getRedemptionRecord({
        lendingType: "ACTIVITY",
      });
      expect(data).toBeDefined();
    });

    test("Should get redemption record for daily", async () => {
      const data = await api.getRedemptionRecord({
        lendingType: "DAILY",
      });
      expect(data).toBeDefined();
    });

    test("Should get redemption record for customized fixed", async () => {
      const data = await api.getRedemptionRecord({
        lendingType: "CUSTOMIZED_FIXED",
      });
      expect(data).toBeDefined();
    });

    test("Should get redemption record for customized fixed for a specific asset", async () => {
      const data = await api.getRedemptionRecord({
        lendingType: "CUSTOMIZED_FIXED",
        asset: "BNB",
      });
      expect(data).toBeDefined();
    });

    test("Should get redemption record for activity within a specific date range", async () => {
      const endTime = Date.now();
      const startTime = endTime - 86400000; // 24 hours ago
      const data = await api.getRedemptionRecord({
        lendingType: "ACTIVITY",
        startTime,
        endTime,
      });
      expect(data).toBeDefined();
    });
  });
});
