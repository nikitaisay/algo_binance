import { 
  test, 
  describe, 
  expect,
  beforeEach
} from "@jest/globals";

import { BinanceSpotC2CApi } from "../../../../api/binance/spot/c2c";

describe("BinanceSpotC2CApi", () => {
  let api: BinanceSpotC2CApi;

  beforeEach(() => {
    api = new BinanceSpotC2CApi({
      enableTestnet: false,
      apiKey: process.env.BINANCE_TESTNET_API_KEY,
      apiSecret: process.env.BINANCE_TESTNET_API_SECRET,
    });
  });

  describe("getC2CTradeHistory", () => {
    test("Should return trade history for a specific trade type", async () => {
      const data = await api.getC2CTradeHistory({
        tradeType: "BUY",
      });
      expect(data).toBeDefined();
    });

    // test("Should return trade history within a specific time range", async () => {
    //   const endTimestamp = Date.now();
    //   const startTimestamp = endTimestamp - 86400000; // 24 hours ago
    //   const data = await api.getC2CTradeHistory({
    //     tradeType: "BUY",
    //     startTimestamp,
    //     endTimestamp,
    //   });
    //   expect(data).toBeDefined();
    // });
  });
});
