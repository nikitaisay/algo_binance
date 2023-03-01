import { 
  test, 
  describe, 
  expect
} from "@jest/globals";

import { BinanceSpotMarketApi } from "../../../../api/binance/spot/market";

describe("Test Binance Spot Market API", () => {
  const api = new BinanceSpotMarketApi({
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

  // describe("Should get exchange info", () => {
  //   test("Without params", async () => {
  //     try {
  //       const data = await api.getExchangeInfo();
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   }); 

  //   test("With symbol", async () => {
  //     try {
  //       const data = await api.getExchangeInfo({
  //         symbol: "BNBUSDT",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   }); 

  //   test("With symbols", async () => {
  //     try {
  //       const data = await api.getExchangeInfo({
  //         symbols: ["BTCUSDT","BNBBTC"],
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   }); 

  //   test("With permissions", async () => {
  //     try {
  //       const data = await api.getExchangeInfo({
  //         permissions: ["SPOT"],
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   }); 
  // });

  // describe("Should get order book", () => {
  //   test("With symbol", async () => {
  //     try {
  //       const data = await api.getOrderBook({
  //         symbol: "BNBUSDT",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   }); 

  //   test("With limit", async () => {
  //     try {
  //       const data = await api.getOrderBook({
  //         symbol: "BNBUSDT",
  //         limit: 1,
  //       });
  //       expect(data).toBeDefined();
  //       expect(data).toHaveProperty("bids");
  //       expect(data.bids).toHaveLength(1);
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   }); 
  // });

  // describe("Should get recent trades list", () => {
  //   test("With symbol", async () => {
  //     try {
  //       const data = await api.getRecentTradesList({
  //         symbol: "BNBUSDT",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   }); 

  //   test("With limit", async () => {
  //     try {
  //       const data = await api.getRecentTradesList({
  //         symbol: "BNBUSDT",
  //         limit: 1,
  //       });
  //       expect(data).toBeDefined();
  //       expect(data).toHaveProperty("bids");
  //       expect(data.bids).toHaveLength(1);
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   }); 
  // });

  // describe("Should get compressed/aggregate trades list", () => {
  //   test("With default params", async () => {
  //     try {
  //       const data = await api.getAggregateTradesList({
  //         symbol: "BNBUSDT",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With limit param", async () => {
  //     try {
  //       const data = await api.getAggregateTradesList({
  //         symbol: "BNBUSDT",
  //         limit: 10,
  //       });
  //       expect(data).toBeDefined();
  //       expect(data).toHaveLength(10);
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With date params", async () => {
  //     try {
  //       const data = await api.getAggregateTradesList({
  //         symbol: "BNBUSDT",
  //         startTime: Date.now() - 10000,
  //         endTime: Date.now(),
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });
  // });

  // describe("Should get candlestick data", () => {
  //   test("With default params", async () => {
  //     try {
  //       const data = await api.getCandlestickData({
  //         symbol: "BNBUSDT",
  //         interval: "1d",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With startTime param", async () => {
  //     try {
  //       const data = await api.getCandlestickData({
  //         symbol: "BNBUSDT",
  //         startTime: Date.now(),
  //         interval: "1d",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With endTime param", async () => {
  //     try {
  //       const data = await api.getCandlestickData({
  //         symbol: "BNBUSDT",
  //         endTime: Date.now(),
  //         interval: "1d",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With endTime and startTime params", async () => {
  //     try {
  //       const data = await api.getCandlestickData({
  //         symbol: "BNBUSDT",
  //         startTime: Date.now() - 10000,
  //         endTime: Date.now(),
  //         interval: "1d",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With limit param", async () => {
  //     try {
  //       const data = await api.getCandlestickData({
  //         symbol: "BNBUSDT",
  //         limit: 1,
  //         interval: "1d",
  //       });
  //       expect(data).toBeDefined();
  //       expect(data).toHaveLength(1);
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });
  // });

  // test("Should get current average price", async () => {
  //   try {
  //     const data = await api.getCurrentAveragePrice({
  //       symbol: "BNBUSDT",
  //     });
  //     expect(data).toBeDefined();
  //   } catch (error) {
  //     throw new Error(`Request failed: ${error}`);
  //   }
  // });

  // describe("Should get 24hr ticker price change statistics", () => {
  //   test("With default params", async () => {
  //     try {
  //       const data = await api.get24hrTickerPriceChangeStatistics();
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With symbol", async () => {
  //     try {
  //       const data = await api.get24hrTickerPriceChangeStatistics({
  //         symbol: "BNBUSDT",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With symbols", async () => {
  //     try {
  //       const data = await api.get24hrTickerPriceChangeStatistics({
  //         symbols: ["BNBUSDT"],
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With type", async () => {
  //     try {
  //       const data = await api.get24hrTickerPriceChangeStatistics({
  //         symbol: "BNBUSDT",
  //         type: "MINI",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });
  // });

  // describe("Should get symbol price ticker", () => {
  //   test("With default params", async () => {
  //     try {
  //       const data = await api.getSymbolPriceTicker();
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With symbol", async () => {
  //     try {
  //       const data = await api.getSymbolPriceTicker({
  //         symbol: "BNBUSDT",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With symbols", async () => {
  //     try {
  //       const data = await api.getSymbolPriceTicker({
  //         symbols: ["BNBUSDT"],
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });
  // });

  // describe("Should get symbol order book ticker", () => {
  //   test("With default params", async () => {
  //     try {
  //       const data = await api.getSymbolOrderBookTicker();
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With symbol", async () => {
  //     try {
  //       const data = await api.getSymbolOrderBookTicker({
  //         symbol: "BNBUSDT",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With symbols", async () => {
  //     try {
  //       const data = await api.getSymbolOrderBookTicker({
  //         symbols: ["BNBUSDT"],
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });
  // });

  // describe("Should get rolling window price change statistics", () => {
  //   test("With default params", async () => {
  //     try {
  //       const data = await api.getRollingWindowPriceChangeStatistics({
  //         symbols: ["BNBUSDT"],
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With symbol", async () => {
  //     try {
  //       const data = await api.getRollingWindowPriceChangeStatistics({
  //         symbol: "BNBUSDT",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With symbols", async () => {
  //     try {
  //       const data = await api.getRollingWindowPriceChangeStatistics({
  //         symbols: ["BNBUSDT"],
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With window size", async () => {
  //     try {
  //       const data = await api.getRollingWindowPriceChangeStatistics({
  //         symbols: ["BNBUSDT"],
  //         windowSize: "1d",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With type", async () => {
  //     try {
  //       const data = await api.getRollingWindowPriceChangeStatistics({
  //         type: "MINI",
  //         symbols: ["BNBUSDT"],
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });
  // });
});
