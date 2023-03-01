import { 
  test, 
  describe, 
  expect
} from "@jest/globals";

import { BinanceSpotBLVTApi } from "../../../../api/binance/spot/blvt";

describe("Test Binance Spot BLVT API", () => {
  const api = new BinanceSpotBLVTApi({
    enableTestnet: false,
    apiKey: process.env.BINANCE_TESTNET_API_KEY,
    apiSecret: process.env.BINANCE_TESTNET_API_SECRET,
  });

  describe("Should get BLVT info", () => {
    test("With default params", async () => {
      try {
        const data = await api.getBLVTInfo({
          tokenName: "BTCDOWN",
        });
        expect(data).toBeDefined();
      } catch (error) {
        throw new Error(`Request failed: ${error}`);
      }
    });
  });

  describe("Should Query Subscription Record (USER_DATA)", () => {
    test("With default params", async () => {
      try {
        const data = await api.querySubscriptionRecord();
        expect(data).toBeDefined();
      } catch (error) {
        throw new Error(`Request failed: ${error}`);
      }
    });

    test("With tokenName param", async () => {
      try {
        const data = await api.querySubscriptionRecord({
          tokenName: "BTCUP",
        });
        expect(data).toBeDefined();
      } catch (error) {
        throw new Error(`Request failed: ${error}`);
      }
    });

    test("With startTime param", async () => {
      try {
        const data = await api.querySubscriptionRecord({
          tokenName: "BTCUP",
          startTime: Date.now() - 1000,
        });
        expect(data).toBeDefined();
      } catch (error) {
        throw new Error(`Request failed: ${error}`);
      }
    });

    test("With endTime param", async () => {
      try {
        const data = await api.querySubscriptionRecord({
          tokenName: "BTCUP",
          startTime: Date.now() - 100000,
          endTime: Date.now(),
        });
        expect(data).toBeDefined();
      } catch (error) {
        throw new Error(`Request failed: ${error}`);
      }
    });
  });

  describe("Should Query Redemption Record (USER_DATA)", () => {
    test("With default params", async () => {
      try {
        const data = await api.queryRedemptionRecord();
        expect(data).toBeDefined();
      } catch (error) {
        throw new Error(`Request failed: ${error}`);
      }
    });

    test("With tokenName param", async () => {
      try {
        const data = await api.queryRedemptionRecord({
          tokenName: "BTCUP",
        });
        expect(data).toBeDefined();
      } catch (error) {
        throw new Error(`Request failed: ${error}`);
      }
    });

    test("With startTime param", async () => {
      try {
        const data = await api.queryRedemptionRecord({
          tokenName: "BTCUP",
          startTime: Date.now() - 1000,
        });
        expect(data).toBeDefined();
      } catch (error) {
        throw new Error(`Request failed: ${error}`);
      }
    });

    test("With endTime param", async () => {
      try {
        const data = await api.queryRedemptionRecord({
          tokenName: "BTCUP",
          startTime: Date.now() - 100000,
          endTime: Date.now(),
        });
        expect(data).toBeDefined();
      } catch (error) {
        throw new Error(`Request failed: ${error}`);
      }
    });
  });

  describe("Should Get BLVT User Limit Info (USER_DATA)", () => {
    test("With default params", async () => {
      try {
        const data = await api.getBLVTUserLimitInfo();
        expect(data).toBeDefined();
      } catch (error) {
        throw new Error(`Request failed: ${error}`);
      }
    });

    test("With tokenName param", async () => {
      try {
        const data = await api.getBLVTUserLimitInfo({
          tokenName: "BTCUP",
        });
        expect(data).toBeDefined();
      } catch (error) {
        throw new Error(`Request failed: ${error}`);
      }
    });
  });
});
