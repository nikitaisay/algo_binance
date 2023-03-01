import { 
  test, 
  describe, 
  expect
} from "@jest/globals";

import { BinanceSpotC2CApi } from "../../../../api/binance/spot/c2c";

describe("Test Binance Spot C2C API", () => {
  const api = new BinanceSpotC2CApi({
    enableTestnet: false,
    apiKey: process.env.BINANCE_TESTNET_API_KEY,
    apiSecret: process.env.BINANCE_TESTNET_API_SECRET,
  });

  describe("Should get C2C trade history", () => {
    test("With default params", async () => {
      try {
        const data = await api.getC2CTradeHistory({
          tradeType: "BUY",
        });
        expect(data).toBeDefined();
      } catch (error) {
        throw new Error(`Request failed: ${error}`);
      }
    });

    test("With start timestamp", async () => {
      try {
        const data = await api.getC2CTradeHistory({
          tradeType: "BUY",
          startTimestamp: Date.now() - 10000,
        });
        expect(data).toBeDefined();
      } catch (error) {
        throw new Error(`Request failed: ${error}`);
      }
    });

    test("With end timestamp", async () => {
      try {
        const data = await api.getC2CTradeHistory({
          tradeType: "BUY",
          endTimestamp: Date.now() - 10000,
        });
        expect(data).toBeDefined();
      } catch (error) {
        throw new Error(`Request failed: ${error}`);
      }
    });
  });
});
