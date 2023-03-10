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
      enableTestnet: false, // BINANCE TESTNET DOESN'T SUPPORT /sapi ENDPOINTS
      apiKey: process.env.BINANCE_API_KEY,
      apiSecret: process.env.BINANCE_API_SECRET,
    });
  });

  test("Should check that api client is defined", () => {
    expect(api).toBeDefined();
  });

  // describe("getC2CTradeHistory", () => {
  //   test("Should return trade history for a specific trade type", async () => {
  //     const data = await api.getC2CTradeHistory({
  //       tradeType: "BUY",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should return trade history within a specific time range", async () => {
  //     const endTimestamp = Date.now();
  //     const startTimestamp = endTimestamp - 86400000; // 24 hours ago
  //     const data = await api.getC2CTradeHistory({
  //       tradeType: "BUY",
  //       startTimestamp,
  //       endTimestamp,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });
});
