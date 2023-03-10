import { 
  test, 
  describe, 
  expect,
  beforeEach
} from "@jest/globals";

import { BinanceSpotPayApi } from "../../../../api/binance/spot/pay";

describe("BinanceSpotPayApi", () => {
  let api: BinanceSpotPayApi;

  beforeEach(() => {
    api = new BinanceSpotPayApi({
      enableTestnet: false, // BINANCE TESTNET DOESN'T SUPPORT /sapi ENDPOINTS
      apiKey: process.env.BINANCE_API_KEY,
      apiSecret: process.env.BINANCE_API_SECRET,
    });
  });

  test("Should check that api client is defined", () => {
    expect(api).toBeDefined();
  });

  // describe("getPayTradeHistory", () => {
  //   test("Should get pay trade history", async () => {
  //     const data = await api.getPayTradeHistory();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get pay trade history within a specific date range", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.getPayTradeHistory({
  //       startTime,
  //       endTime,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });
});
