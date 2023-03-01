import { 
  test, 
  describe, 
  expect
} from "@jest/globals";

import { BinancePerpetualFuturesMarketApi } from "../../../../api/binance/perpetualFuturesApi/market";

describe("Test Binance Perpetual Futures Market API", () => {
  const api = new BinancePerpetualFuturesMarketApi({
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
  //         symbol: "BTCUSDT",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With limit param", async () => {
  //     try {
  //       const data = await api.getOrderBook({
  //         symbol: "BTCUSDT",
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
  //         symbol: "BTCUSDT",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With limit param", async () => {
  //     try {
  //       const data = await api.getRecentTrades({
  //         symbol: "BTCUSDT",
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
  //         symbol: "BTCUSDT",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With limit param", async () => {
  //     try {
  //       const data = await api.getAggregateTradesList({
  //         symbol: "BTCUSDT",
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
  //         symbol: "BTCUSDT",
  //         startTime: Date.now() - 10000,
  //         endTime: Date.now(),
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });
  // });

  // describe("Should get get candlestick data", () => {
  //   test("With default params", async () => {
  //     try {
  //       const data = await api.getCandlestickData({
  //         symbol: "BTCUSDT",
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
  //         symbol: "BTCUSDT",
  //         interval: "1d",
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
  //       const data = await api.getCandlestickData({
  //         symbol: "BTCUSDT",
  //         interval: "1d",
  //         startTime: Date.now() - 10000,
  //         endTime: Date.now(),
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });
  // });

  // describe("Should get continuous contract candlestick data", () => {
  //   test("With default params", async () => {
  //     try {
  //       const data = await api.getContinuousContractCandlestickData({
  //         pair: "BTCUSDT",
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
  //         pair: "BTCUSDT",
  //         interval: "1d",
  //         contractType: "PERPETUAL",
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
  //       const data = await api.getContinuousContractCandlestickData({
  //         pair: "BTCUSDT",
  //         interval: "1d",
  //         contractType: "PERPETUAL",
  //         startTime: Date.now() - 10000,
  //         endTime: Date.now(),
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });
  // });

  // describe("Should get index price candlestick data", () => {
  //   test("With default params", async () => {
  //     try {
  //       const data = await api.getIndexPriceCandlestickData({
  //         pair: "BTCUSDT",
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
  //         pair: "BTCUSDT",
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
  //         pair: "BTCUSDT",
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
  //         pair: "BTCUSDT",
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
  //         pair: "BTCUSDT",
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
  //         symbol: "BTCUSDT",
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
  //         symbol: "BTCUSDT",
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
  //         symbol: "BTCUSDT",
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
  //         symbol: "BTCUSDT",
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
  //         symbol: "BTCUSDT",
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

  // test("Should get mark price data", async () => {
  //   try {
  //     const data = await api.getMarkPrice({
  //       symbol: "BTCUSDT",
  //     });
  //     expect(data).toBeDefined();
  //   } catch (error) {
  //     throw new Error(`Request failed: ${error}`);
  //   }
  // });

  // describe("Should get funding rate history data", () => {
  //   test("With default params", async () => {
  //     try {
  //       const data = await api.getFundingRateHistory({
  //         symbol: "BTCUSDT",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With startTime param", async () => {
  //     try {
  //       const data = await api.getFundingRateHistory({
  //         symbol: "BTCUSDT",
  //         startTime: Date.now(),
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With endTime param", async () => {
  //     try {
  //       const data = await api.getFundingRateHistory({
  //         symbol: "BTCUSDT",
  //         endTime: Date.now(),
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With endTime and startTime params", async () => {
  //     try {
  //       const data = await api.getFundingRateHistory({
  //         symbol: "BTCUSDT",
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
  //       const data = await api.getFundingRateHistory({
  //         symbol: "BTCUSDT",
  //         limit: 1,
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
  //         symbol: "BTCUSDT",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With pair", async () => {
  //     try {
  //       const data = await api.get24hrTickerPriceChangeStatistics({
  //         pair: "BTCUSDT",
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
  //         symbol: "BTCUSDT",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With pair", async () => {
  //     try {
  //       const data = await api.getSymbolPriceTicker({
  //         pair: "BTCUSDT",
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
  //         symbol: "BTCUSDT",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With pair", async () => {
  //     try {
  //       const data = await api.getSymbolOrderBookTicker({
  //         pair: "BTCUSDT",
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
  //       symbol: "BTCUSDT",
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
  //           symbol: "BTCUSDT",
  //           period: "1d",
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With startTime param", async () => {
  //       try {
  //         const data = await api.getOpenInterestStatistics({
  //           symbol: "BTCUSDT",
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
  //         const data = await api.getOpenInterestStatistics({
  //           symbol: "BTCUSDT",
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
  //         const data = await api.getOpenInterestStatistics({
  //           symbol: "BTCUSDT",
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
  //         const data = await api.getOpenInterestStatistics({
  //           symbol: "BTCUSDT",
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

  //   describe("Should get top trader long/short ratio accounts", () => {
  //     test("With default params", async () => {
  //       try {
  //         const data = await api.getTopTraderLongShortRatioAccounts({
  //           symbol: "BTCUSDT",
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
  //           symbol: "BTCUSDT",
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
  //           symbol: "BTCUSDT",
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
  //           symbol: "BTCUSDT",
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
  //           symbol: "BTCUSDT",
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
  //           symbol: "BTCUSDT",
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
  //           symbol: "BTCUSDT",
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
  //           symbol: "BTCUSDT",
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
  //           symbol: "BTCUSDT",
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
  //           symbol: "BTCUSDT",
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
  //           symbol: "BTCUSDT",
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
  //           symbol: "BTCUSDT",
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
  //           symbol: "BTCUSDT",
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
  //           symbol: "BTCUSDT",
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
  //           symbol: "BTCUSDT",
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
  //           symbol: "BTCUSDT",
  //           period: "1d",
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With startTime param", async () => {
  //       try {
  //         const data = await api.getTakerBuySellVolume({
  //           symbol: "BTCUSDT",
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
  //         const data = await api.getTakerBuySellVolume({
  //           symbol: "BTCUSDT",
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
  //         const data = await api.getTakerBuySellVolume({
  //           symbol: "BTCUSDT",
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
  //         const data = await api.getTakerBuySellVolume({
  //           symbol: "BTCUSDT",
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

  //   describe("Should get Historical BLVT NAV Kline/Candlestick", () => {
  //     test("With default params", async () => {
  //       try {
  //         const data = await api.getHistoricalBLVTNAVKlineCandlestick({
  //           symbol: "BTCUP",
  //           interval: "1d",
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With startTime param", async () => {
  //       try {
  //         const data = await api.getHistoricalBLVTNAVKlineCandlestick({
  //           symbol: "BTCUP",
  //           interval: "1d",
  //           startTime: Date.now(),
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With endTime param", async () => {
  //       try {
  //         const data = await api.getHistoricalBLVTNAVKlineCandlestick({
  //           symbol: "BTCUP",
  //           interval: "1d",
  //           endTime: Date.now(),
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  
  //     test("With endTime and startTime params", async () => {
  //       try {
  //         const data = await api.getHistoricalBLVTNAVKlineCandlestick({
  //           symbol: "BTCUP",
  //           interval: "1d",
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
  //         const data = await api.getHistoricalBLVTNAVKlineCandlestick({
  //           symbol: "BTCUP",
  //           interval: "1d",
  //           limit: 1,
  //         });
  //         expect(data).toBeDefined();
  //         expect(data).toHaveLength(1);
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  //   });
  // }

  // describe("Should get Multi-Assets Mode Asset Index", () => {
  //   test("With default params", async () => {
  //     try {
  //       const data = await api.getMultiAssetsModeAssetIndex();
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   if (!api.enableTestnet) {
  //     test("With symbol param", async () => {
  //       try {
  //         const data = await api.getMultiAssetsModeAssetIndex({
  //           symbol: "ADAUSD",
  //         });
  //         expect(data).toBeDefined();
  //       } catch (error) {
  //         throw new Error(`Request failed: ${error}`);
  //       }
  //     });
  //   }
  // });

  // describe("Should get Composite Index Symbol Information", () => {
  //   test("With default params", async () => {
  //     try {
  //       const data = await api.getCompositeIndexSymbolInformation();
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("With symbol param", async () => {
  //     try {
  //       const data = await api.getCompositeIndexSymbolInformation({
  //         symbol: "DEFIUSDT",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });
  // });
});

