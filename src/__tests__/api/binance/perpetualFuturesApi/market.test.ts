import { 
  test, 
  describe, 
  expect,
  beforeEach
} from "@jest/globals";

import { BinancePerpetualFuturesMarketApi } from "../../../../api/binance/perpetualFuturesApi/market";

describe("Test Binance Perpetual Futures Market API", () => {
  let api: BinancePerpetualFuturesMarketApi;

  beforeEach(() => {
    api = new BinancePerpetualFuturesMarketApi({
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

  // describe("getOrderBook", () => {
  //   test("Should get order book for specific symbol", async () => {
  //     const data = await api.getOrderBook({
  //       symbol: "BTCUSDT",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get order book for specific symbol with limit", async () => {
  //     const data = await api.getOrderBook({
  //       symbol: "BTCUSDT",
  //       limit: 10,
  //     });
  //     expect(data).toBeDefined();
  //     expect(data).toHaveProperty("bids");
  //     expect(data.bids).toHaveLength(10);
  //   });
  // });

  // describe("getRecentTrades", () => {
  //   test("Should get recent trades for specific symbol", async () => {
  //     try {
  //       const data = await api.getRecentTrades({
  //         symbol: "BTCUSDT",
  //       });
  //       expect(data).toBeDefined();
  //     } catch (error) {
  //       throw new Error(`Request failed: ${error}`);
  //     }
  //   });

  //   test("Should get recent trades for specific symbol with limit", async () => {
  //     const data = await api.getRecentTrades({
  //       symbol: "BTCUSDT",
  //       limit: 10,
  //     });
  //     expect(data).toBeDefined();
  //     expect(data).toHaveLength(10);
  //   });
  // });

  // describe("getAggregateTradesList", () => {
  //   test("Should get compressed/aggregate trades list for specific symbol", async () => {
  //     const data = await api.getAggregateTradesList({
  //       symbol: "BTCUSDT",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get compressed/aggregate trades list for specific symbol with limit", async () => {
  //     const data = await api.getAggregateTradesList({
  //       symbol: "BTCUSDT",
  //       limit: 10,
  //     });
  //     expect(data).toBeDefined();
  //     expect(data).toHaveLength(10);
  //   });

  //   test("Should get compressed/aggregate trades list for specific symbol within a specific data range", async () => {
  //     const startTime = Date.now();
  //     const endTime = startTime - 86400000; // 24 hours ago
  //     const data = await api.getAggregateTradesList({
  //       symbol: "BTCUSDT",
  //       startTime,
  //       endTime,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getCandlestickData", () => {
  //   test("Should get get candlestick data for a specific symbol within a specific interval", async () => {
  //     const data = await api.getCandlestickData({
  //       symbol: "BTCUSDT",
  //       interval: "1d",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get get candlestick data for a specific symbol within a specific interval with limit", async () => {
  //     const data = await api.getCandlestickData({
  //       symbol: "BTCUSDT",
  //       interval: "1d",
  //       limit: 10,
  //     });
  //     expect(data).toBeDefined();
  //     expect(data).toHaveLength(10);
  //   });

  //   test("Should get get candlestick data for a specific symbol within a specific interval with limit within specific date range", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.getCandlestickData({
  //       symbol: "BTCUSDT",
  //       interval: "1d",
  //       startTime,
  //       endTime,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getContinuousContractCandlestickData", () => {
  //   test("Should get continuous contract candlestick data", async () => {
  //     const data = await api.getContinuousContractCandlestickData({
  //       pair: "BTCUSDT",
  //       interval: "1d",
  //       contractType: "PERPETUAL",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get continuous contract candlestick data with limit", async () => {
  //     const data = await api.getContinuousContractCandlestickData({
  //       pair: "BTCUSDT",
  //       interval: "1d",
  //       contractType: "PERPETUAL",
  //       limit: 10,
  //     });
  //     expect(data).toBeDefined();
  //     expect(data).toHaveLength(10);
  //   });

  //   test("Should get continuous contract candlestick data with limit within specific date range", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.getContinuousContractCandlestickData({
  //       pair: "BTCUSDT",
  //       interval: "1d",
  //       contractType: "PERPETUAL",
  //       startTime,
  //       endTime,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getIndexPriceCandlestickData", () => {
  //   test("Should get index price candlestick data", async () => {
  //     const data = await api.getIndexPriceCandlestickData({
  //       pair: "BTCUSDT",
  //       interval: "1d",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get index price candlestick data within a specific interval", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.getIndexPriceCandlestickData({
  //       pair: "BTCUSDT",
  //       startTime,
  //       endTime,
  //       interval: "1d",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get index price candlestick data with limit", async () => {
  //     const data = await api.getIndexPriceCandlestickData({
  //       pair: "BTCUSDT",
  //       limit: 1,
  //       interval: "1d",
  //     });
  //     expect(data).toBeDefined();
  //     expect(data).toHaveLength(1);
  //   });
  // });

  // describe("getMarkPriceCandlestickData", () => {
  //   test("Should get mark price candlestick data", async () => {
  //     const data = await api.getMarkPriceCandlestickData({
  //       symbol: "BTCUSDT",
  //       interval: "1d",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get mark price candlestick data within a specific interval", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.getMarkPriceCandlestickData({
  //       symbol: "BTCUSDT",
  //       startTime,
  //       endTime,
  //       interval: "1d",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get mark price candlestick data with limit", async () => {
  //     const data = await api.getMarkPriceCandlestickData({
  //       symbol: "BTCUSDT",
  //       limit: 1,
  //       interval: "1d",
  //     });
  //     expect(data).toBeDefined();
  //     expect(data).toHaveLength(1);
  //   });
  // });

  // describe("getMarkPrice", () => {
  //   test("Should get mark price data for a specific symbol", async () => {
  //     const data = await api.getMarkPrice({
  //       symbol: "BTCUSDT",
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getFundingRateHistory", () => {
  //   test("Should get funding rate history data", async () => {
  //     const data = await api.getFundingRateHistory({
  //       symbol: "BTCUSDT",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get funding rate history data within a specific interval", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.getFundingRateHistory({
  //       symbol: "BTCUSDT",
  //       startTime,
  //       endTime,
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get funding rate history data with limit", async () => {
  //     const data = await api.getFundingRateHistory({
  //       symbol: "BTCUSDT",
  //       limit: 1,
  //     });
  //     expect(data).toBeDefined();
  //     expect(data).toHaveLength(1);
  //   });
  // });

  // describe("get24hrTickerPriceChangeStatistics", () => {
  //   test("Should get 24hr ticker price change statistics", async () => {
  //     const data = await api.get24hrTickerPriceChangeStatistics();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get 24hr ticker price change statistics for a specific symbol", async () => {
  //     const data = await api.get24hrTickerPriceChangeStatistics({
  //       symbol: "BTCUSDT",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get 24hr ticker price change statistics for a specific pair", async () => {
  //     const data = await api.get24hrTickerPriceChangeStatistics({
  //       pair: "BTCUSDT",
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getSymbolPriceTicker", () => {
  //   test("Should get symbol price ticker", async () => {
  //     const data = await api.getSymbolPriceTicker();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get symbol price ticker for a specific symbol", async () => {
  //     const data = await api.getSymbolPriceTicker({
  //       symbol: "BTCUSDT",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get symbol price ticker for a specific pair", async () => {
  //     const data = await api.getSymbolPriceTicker({
  //       pair: "BTCUSDT",
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getSymbolOrderBookTicker", () => {
  //   test("Should get symbol order book ticker", async () => {
  //     const data = await api.getSymbolOrderBookTicker();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get symbol order book ticker for a specific symbol", async () => {
  //     const data = await api.getSymbolOrderBookTicker({
  //       symbol: "BTCUSDT",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get symbol order book ticker for a specific pair", async () => {
  //     const data = await api.getSymbolOrderBookTicker({
  //       pair: "BTCUSDT",
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getOpenInterest", () => {
  //   test("Should get open interest for a specific symbol", async () => {
  //     const data = await api.getOpenInterest({
  //       symbol: "BTCUSDT",
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getMultiAssetsModeAssetIndex", () => {
  //   test("Should get Multi-Assets Mode Asset Index", async () => {
  //     const data = await api.getMultiAssetsModeAssetIndex();
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getCompositeIndexSymbolInformation", () => {
  //   test("Should get Composite Index Symbol Information", async () => {
  //     const data = await api.getCompositeIndexSymbolInformation();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get Composite Index Symbol Information for a specific symbol", async () => {
  //     const data = await api.getCompositeIndexSymbolInformation({
  //       symbol: "DEFIUSDT",
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });
});

