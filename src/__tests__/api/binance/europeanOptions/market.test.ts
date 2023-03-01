import { 
  test, 
  describe, 
  expect
} from "@jest/globals";

import { BinanceEuropeanOptionsMarketApi } from "../../../../api/binance/europeanOptions/market";

describe("Test Binance European Options Market API", () => {
  const api = new BinanceEuropeanOptionsMarketApi({
    enableTestnet: true,
    apiKey: process.env.BINANCE_TESTNET_API_KEY,
    apiSecret: process.env.BINANCE_TESTNET_API_SECRET,
  });

  test("Should test connectivity", async () => {
    try {
      const data = await api.testConnectivity();
      expect(data).toBeDefined();
    } catch (error) {
      throw new Error(`Request failed: ${error}`);
    }
  });

  // test("Should check server time", async () => {
  //   try {
  //     const data = await api.checkServerTime();
  //     expect(data).toBeDefined();
  //   } catch (error) {
  //     throw new Error(`Request failed: ${error}`);
  //   }
  // });

  // test("Should get exchange info", async () => {
  //   try {
  //     const data = await api.getExchangeInfo();
  //     expect(data).toBeDefined();
  //   } catch (error) {
  //     throw new Error(`Request failed: ${error}`);
  //   }
  // });

  // test("Should get option mark price", async () => {
  //   try {
  //     const data = await api.getOptionMarkPrice();
  //     expect(data).toBeDefined();
  //   } catch (error) {
  //     throw new Error(`Request failed: ${error}`);
  //   }
  // });

  // test("Should get 24hr ticker price change statistics", async () => {
  //   try {
  //     const data = await api.get24hrTickerPriceChangeStatistics();
  //     expect(data).toBeDefined();
  //   } catch (error) {
  //     throw new Error(`Request failed: ${error}`);
  //   }
  // });

  // describe("Should get historical exercise records", () => {
  //   test("Without params", async () => {
  //     try {
  //       const data = await api.getHistoricalExerciseRecords();
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With startTime", async () => {
  //     try {
  //       const data = await api.getHistoricalExerciseRecords({
  //         startTime: Date.now() - 10000,
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With endTime", async () => {
  //     try {
  //       const data = await api.getHistoricalExerciseRecords({
  //         endTime: Date.now(),
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With endTime and startTime", async () => {
  //     try {
  //       const data = await api.getHistoricalExerciseRecords({
  //         endTime: Date.now(),
  //         startTime: Date.now() - 10000,
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   if (!api.enableTestnet) {
  //     test("With limit", async () => {
  //       try {
  //         const data = await api.getHistoricalExerciseRecords({
  //           limit: 1,
  //         });
  //         expect(data).toBeDefined();
  //         expect(data).toHaveLength(1);
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  //   }
  // });
});
