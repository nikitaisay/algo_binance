import { 
  test, 
  describe, 
  expect
} from "@jest/globals";

import { BinanceDelivaryFuturesMarketApi } from "../../../../api/binance/deliveryFuturesApi/market";

describe("Test Binance Delivery Futures Market API", () => {
  const api = new BinanceDelivaryFuturesMarketApi({
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

  // describe("Should get order book", () => {
  //   test("With default params", async () => {
  //     try {
  //       const data = await api.getOrderBook({
  //         symbol: "BTCUSD_PERP",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With limit param", async () => {
  //     try {
  //       const data = await api.getOrderBook({
  //         symbol: "BTCUSD_PERP",
  //         limit: 10,
  //       });
  //       expect(data).toBeDefined();
  //       expect(data).toHaveProperty("bids");
  //       expect(data.bids).toHaveLength(10);
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });
  // });

  // describe("Should get recent trades", () => {
  //   test("With default params", async () => {
  //     try {
  //       const data = await api.getRecentTrades({
  //         symbol: "BTCUSD_PERP",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With limit param", async () => {
  //     try {
  //       const data = await api.getRecentTrades({
  //         symbol: "BTCUSD_PERP",
  //         limit: 10,
  //       });
  //       expect(data).toBeDefined();
  //       expect(data).toHaveLength(10);
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });
  // });

  // describe("Should get compressed/aggregate trades list", () => {
  //   test("With default params", async () => {
  //     try {
  //       const data = await api.getAggregateTradesList({
  //         symbol: "BTCUSD_PERP",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With limit param", async () => {
  //     try {
  //       const data = await api.getAggregateTradesList({
  //         symbol: "BTCUSD_PERP",
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
  //         symbol: "BTCUSD_PERP",
  //         startTime: Date.now() - 10000,
  //         endTime: Date.now(),
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });
  // });

  // describe("Should get index price and mark price", () => {
  //   test("With default params", async () => {
  //     try {
  //       const data = await api.getIndexPriceAndMarkPrice();
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With symbol param", async () => {
  //     try {
  //       const data = await api.getIndexPriceAndMarkPrice({
  //         symbol: "BTCUSD_PERP",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With pair param", async () => {
  //     try {
  //       const data = await api.getIndexPriceAndMarkPrice({
  //         pair: "XRPUSD",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });
  // });

  // describe("Should get funding rate history of perpetual futures", () => {
  //   test("With default params", async () => {
  //     try {
  //       const data = await api.getFundingRateHistoryOfPerpetualFutures({
  //         symbol: "BTCUSD_PERP",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With startTime param", async () => {
  //     try {
  //       const data = await api.getFundingRateHistoryOfPerpetualFutures({
  //         symbol: "BTCUSD_PERP",
  //         startTime: Date.now(),
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With endTime param", async () => {
  //     try {
  //       const data = await api.getFundingRateHistoryOfPerpetualFutures({
  //         symbol: "BTCUSD_PERP",
  //         endTime: Date.now(),
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With endTime and startTime params", async () => {
  //     try {
  //       const data = await api.getFundingRateHistoryOfPerpetualFutures({
  //         symbol: "BTCUSD_PERP",
  //         startTime: Date.now() - 10000,
  //         endTime: Date.now(),
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With limit param", async () => {
  //     try {
  //       const data = await api.getFundingRateHistoryOfPerpetualFutures({
  //         symbol: "BTCUSD_PERP",
  //         limit: 1,
  //       });
  //       expect(data).toBeDefined();
  //       expect(data).toHaveLength(1);
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });
  // });

  // describe("Should get candlestick data", () => {
  //   test("With default params", async () => {
  //     try {
  //       const data = await api.getCandlestickData({
  //         symbol: "BTCUSD_PERP",
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
  //         symbol: "BTCUSD_PERP",
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
  //         symbol: "BTCUSD_PERP",
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
  //         symbol: "BTCUSD_PERP",
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
  //         symbol: "BTCUSD_PERP",
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

  // describe("Should get continuous contract candlestick data", () => {
  //   test("With default params", async () => {
  //     try {
  //       const data = await api.getContinuousContractCandlestickData({
  //         pair: "XRPUSD",
  //         interval: "1d",
  //         contractType: "PERPETUAL",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With startTime param", async () => {
  //     try {
  //       const data = await api.getContinuousContractCandlestickData({
  //         pair: "XRPUSD",
  //         startTime: Date.now(),
  //         interval: "1d",
  //         contractType: "PERPETUAL",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With endTime param", async () => {
  //     try {
  //       const data = await api.getContinuousContractCandlestickData({
  //         pair: "XRPUSD",
  //         endTime: Date.now(),
  //         interval: "1d",
  //         contractType: "PERPETUAL",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With endTime and startTime params", async () => {
  //     try {
  //       const data = await api.getContinuousContractCandlestickData({
  //         pair: "XRPUSD",
  //         startTime: Date.now() - 10000,
  //         endTime: Date.now(),
  //         interval: "1d",
  //         contractType: "PERPETUAL",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With limit param", async () => {
  //     try {
  //       const data = await api.getContinuousContractCandlestickData({
  //         pair: "XRPUSD",
  //         limit: 1,
  //         interval: "1d",
  //         contractType: "PERPETUAL",
  //       });
  //       expect(data).toBeDefined();
  //       expect(data).toHaveLength(1);
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });
  // });

  // describe("Should get index price candlestick data", () => {
  //   test("With default params", async () => {
  //     try {
  //       const data = await api.getIndexPriceCandlestickData({
  //         pair: "XRPUSD",
  //         interval: "1d",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With startTime param", async () => {
  //     try {
  //       const data = await api.getIndexPriceCandlestickData({
  //         pair: "XRPUSD",
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
  //       const data = await api.getIndexPriceCandlestickData({
  //         pair: "XRPUSD",
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
  //       const data = await api.getIndexPriceCandlestickData({
  //         pair: "XRPUSD",
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
  //       const data = await api.getIndexPriceCandlestickData({
  //         pair: "XRPUSD",
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

  // describe("Should get mark price candlestick data", () => {
  //   test("With default params", async () => {
  //     try {
  //       const data = await api.getMarkPriceCandlestickData({
  //         symbol: "BTCUSD_PERP",
  //         interval: "1d",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With startTime param", async () => {
  //     try {
  //       const data = await api.getMarkPriceCandlestickData({
  //         symbol: "BTCUSD_PERP",
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
  //       const data = await api.getMarkPriceCandlestickData({
  //         symbol: "BTCUSD_PERP",
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
  //       const data = await api.getMarkPriceCandlestickData({
  //         symbol: "BTCUSD_PERP",
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
  //       const data = await api.getMarkPriceCandlestickData({
  //         symbol: "BTCUSD_PERP",
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

  // describe("Should get 24hr ticker price change statistics", () => {
  //   test("Without params", async () => {
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
  //         symbol: "BTCUSD_PERP",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With pair", async () => {
  //     try {
  //       const data = await api.get24hrTickerPriceChangeStatistics({
  //         pair: "XRPUSD",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });
  // });

  // describe("Should get symbol price ticker", () => {
  //   test("Without params", async () => {
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
  //         symbol: "BTCUSD_PERP",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With pair", async () => {
  //     try {
  //       const data = await api.getSymbolPriceTicker({
  //         pair: "XRPUSD",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });
  // });

  // describe("Should get symbol order book ticker", () => {
  //   test("Without params", async () => {
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
  //         symbol: "BTCUSD_PERP",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With pair", async () => {
  //     try {
  //       const data = await api.getSymbolOrderBookTicker({
  //         pair: "XRPUSD",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });
  // });

  // test("Should get open interest", async () => {
  //   try {
  //     const data = await api.getOpenInterest({
  //       symbol: "BTCUSD_PERP",
  //     });
  //     expect(data).toBeDefined();
  //   } catch (error) {
  //     throw new Error(`Request failed: ${error}`);
  //   }
  // });

  // // this are not available in binance testnet
  // if (!api.enableTestnet) {
  //   describe("Should get open interest statistics", () => {
  //     test("With default params", async () => {
  //       try {
  //         const data = await api.getOpenInterestStatistics({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           contractType: "ALL",
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With startTime param", async () => {
  //       try {
  //         const data = await api.getOpenInterestStatistics({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           contractType: "ALL",
  //           startTime: Date.now(),
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With endTime param", async () => {
  //       try {
  //         const data = await api.getOpenInterestStatistics({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           contractType: "ALL",
  //           endTime: Date.now(),
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With endTime and startTime params", async () => {
  //       try {
  //         const data = await api.getOpenInterestStatistics({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           contractType: "ALL",
  //           startTime: Date.now() - 10000,
  //           endTime: Date.now(),
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With limit param", async () => {
  //       try {
  //         const data = await api.getOpenInterestStatistics({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           contractType: "ALL",
  //           limit: 1,
  //         });
  //         expect(data).toBeDefined();
  //         expect(data).toHaveLength(1);
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  //   });

  //   describe("Should get top trader long/short ratio accounts", () => {
  //     test("With default params", async () => {
  //       try {
  //         const data = await api.getTopTraderLongShortRatioAccounts({
  //           pair: "XRPUSD",
  //           period: "1d",
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With startTime param", async () => {
  //       try {
  //         const data = await api.getTopTraderLongShortRatioAccounts({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           startTime: Date.now(),
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With endTime param", async () => {
  //       try {
  //         const data = await api.getTopTraderLongShortRatioAccounts({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           endTime: Date.now(),
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With endTime and startTime params", async () => {
  //       try {
  //         const data = await api.getTopTraderLongShortRatioAccounts({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           startTime: Date.now() - 10000,
  //           endTime: Date.now(),
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With limit param", async () => {
  //       try {
  //         const data = await api.getTopTraderLongShortRatioAccounts({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           limit: 1,
  //         });
  //         expect(data).toBeDefined();
  //         expect(data).toHaveLength(1);
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  //   });

  //   describe("Should get top trader long/short ratio positions", () => {
  //     test("With default params", async () => {
  //       try {
  //         const data = await api.getTopTraderLongShortRatioPostions({
  //           pair: "XRPUSD",
  //           period: "1d",
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With startTime param", async () => {
  //       try {
  //         const data = await api.getTopTraderLongShortRatioPostions({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           startTime: Date.now(),
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With endTime param", async () => {
  //       try {
  //         const data = await api.getTopTraderLongShortRatioPostions({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           endTime: Date.now(),
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With endTime and startTime params", async () => {
  //       try {
  //         const data = await api.getTopTraderLongShortRatioPostions({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           startTime: Date.now() - 10000,
  //           endTime: Date.now(),
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With limit param", async () => {
  //       try {
  //         const data = await api.getTopTraderLongShortRatioPostions({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           limit: 1,
  //         });
  //         expect(data).toBeDefined();
  //         expect(data).toHaveLength(1);
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  //   });

  //   describe("Should get long/short ratio", () => {
  //     test("With default params", async () => {
  //       try {
  //         const data = await api.getLongShortRatio({
  //           pair: "XRPUSD",
  //           period: "1d",
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With startTime param", async () => {
  //       try {
  //         const data = await api.getLongShortRatio({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           startTime: Date.now(),
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With endTime param", async () => {
  //       try {
  //         const data = await api.getLongShortRatio({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           endTime: Date.now(),
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With endTime and startTime params", async () => {
  //       try {
  //         const data = await api.getLongShortRatio({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           startTime: Date.now() - 10000,
  //           endTime: Date.now(),
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With limit param", async () => {
  //       try {
  //         const data = await api.getLongShortRatio({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           limit: 1,
  //         });
  //         expect(data).toBeDefined();
  //         expect(data).toHaveLength(1);
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  //   });

  //   describe("Should get taker buy/sell volume", () => {
  //     test("With default params", async () => {
  //       try {
  //         const data = await api.getTakerBuySellVolume({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           contractType: "ALL",
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With startTime param", async () => {
  //       try {
  //         const data = await api.getTakerBuySellVolume({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           startTime: Date.now(),
  //           contractType: "ALL",
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With endTime param", async () => {
  //       try {
  //         const data = await api.getTakerBuySellVolume({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           endTime: Date.now(),
  //           contractType: "ALL",
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With endTime and startTime params", async () => {
  //       try {
  //         const data = await api.getTakerBuySellVolume({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           startTime: Date.now() - 10000,
  //           endTime: Date.now(),
  //           contractType: "ALL",
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With limit param", async () => {
  //       try {
  //         const data = await api.getTakerBuySellVolume({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           limit: 1,
  //           contractType: "ALL",
  //         });
  //         expect(data).toBeDefined();
  //         expect(data).toHaveLength(1);
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  //   });

  //   describe("Should get basis", () => {
  //     test("With default params", async () => {
  //       try {
  //         const data = await api.getTakerBuySellVolume({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           contractType: "ALL",
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With startTime param", async () => {
  //       try {
  //         const data = await api.getTakerBuySellVolume({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           startTime: Date.now(),
  //           contractType: "ALL",
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With endTime param", async () => {
  //       try {
  //         const data = await api.getTakerBuySellVolume({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           endTime: Date.now(),
  //           contractType: "ALL",
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With endTime and startTime params", async () => {
  //       try {
  //         const data = await api.getTakerBuySellVolume({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           startTime: Date.now() - 10000,
  //           endTime: Date.now(),
  //           contractType: "ALL",
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With limit param", async () => {
  //       try {
  //         const data = await api.getTakerBuySellVolume({
  //           pair: "XRPUSD",
  //           period: "1d",
  //           limit: 1,
  //           contractType: "ALL",
  //         });
  //         expect(data).toBeDefined();
  //         expect(data).toHaveLength(1);
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  //   });
  // }
});
