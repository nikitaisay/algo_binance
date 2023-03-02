import { 
  test, 
  describe, 
  expect,
  beforeEach
} from "@jest/globals";

import { BinanceEuropeanOptionsMarketApi } from "../../../../api/binance/europeanOptions/market";

describe("Test Binance European Options Market API", () => {
  let api: BinanceEuropeanOptionsMarketApi;

  beforeEach(() => {
    api = new BinanceEuropeanOptionsMarketApi({
      enableTestnet: true,
      apiKey: process.env.BINANCE_TESTNET_API_KEY,
      apiSecret: process.env.BINANCE_TESTNET_API_SECRET,
    });
  });

  describe("testConnectivity", () => {
    test("Should test connectivity", async () => {
      const data = await api.testConnectivity();
      expect(data).toBeDefined();
    });
  });

  // describe("checkServerTime", () => {
  //   test("Should check server time", async () => {
  //     const data = await api.checkServerTime();
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getExchangeInfo", () => {
  //   test("Should get exchange info", async () => {
  //     const data = await api.getExchangeInfo();
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getOptionMarkPrice", () => {
  //   test("Should get option mark price", async () => {
  //     const data = await api.getOptionMarkPrice();
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("get24hrTickerPriceChangeStatistics", () => {
  //   test("Should get 24hr ticker price change statistics", async () => {
  //     const data = await api.get24hrTickerPriceChangeStatistics();
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getHistoricalExerciseRecords", () => {
  //   test("Should get historical exercise records", async () => {
  //     const data = await api.getHistoricalExerciseRecords();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get historical exercise records within a specific date range", async () => {
  //     const startTime = Date.now();
  //     const endTime = startTime - 86400000; // 24 hours ago
  //     const data = await api.getHistoricalExerciseRecords({
  //       startTime,
  //       endTime,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });
});
