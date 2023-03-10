import { 
  test, 
  describe, 
  expect,
  beforeEach
} from "@jest/globals";

import { BinanceSpotRebateApi } from "../../../../api/binance/spot/rebate";

describe("BinanceSpotRebateApi", () => {
  let api: BinanceSpotRebateApi;

  beforeEach(() => {
    api = new BinanceSpotRebateApi({
      enableTestnet: false, // BINANCE TESTNET DOESN'T SUPPORT /sapi ENDPOINTS
      apiKey: process.env.BINANCE_API_KEY,
      apiSecret: process.env.BINANCE_API_SECRET,
    });
  });

  test("Should check that api client is defined", () => {
    expect(api).toBeDefined();
  });

  // describe("getSpotRebateHistoryRecords", () => {
  //   test("Should get rebate history records", async () => {
  //     const data = await api.getSpotRebateHistoryRecords();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get rebate history records within a specific date range", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.getSpotRebateHistoryRecords({
  //       startTime,
  //       endTime,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });
});
