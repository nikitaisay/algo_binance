import { 
  test, 
  describe, 
  expect,
  beforeEach
} from "@jest/globals";

import { BinanceDelivaryFuturesMarketApi } from "../../../../api/binance/deliveryFuturesApi/market";

describe("Test Binance Delivery Futures Market API", () => {
  let api: BinanceDelivaryFuturesMarketApi;

  beforeEach(() => {
    api = new BinanceDelivaryFuturesMarketApi({
      enableTestnet: true,
      apiKey: process.env.BINANCE_TESTNET_API_KEY,
      apiSecret: process.env.BINANCE_TESTNET_API_SECRET,
    });
  });

  test("Should check that api client is defined", () => {
    expect(api).toBeDefined();
  });

  // describe("testConnectivity", () => {
  //   test("Should test connectivity", async () => {
  //     const data = await api.testConnectivity();
  //     expect(data).toBeDefined();
  //   });
  // });

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
  //       symbol: "BTCUSD_PERP",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get order book for specific symbol with limit", async () => {
  //     const data = await api.getOrderBook({
  //       symbol: "BTCUSD_PERP",
  //       limit: 10,
  //     });
  //     expect(data).toBeDefined();
  //     expect(data).toHaveProperty("bids");
  //     expect(data.bids).toHaveLength(10);
  //   });
  // });

  // describe("getRecentTrades", () => {
  //   test("Should get recent trades for specific symbol", async () => {
  //     const data = await api.getRecentTrades({
  //       symbol: "BTCUSD_PERP",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get recent trades for specific symbol with limit", async () => {
  //     const data = await api.getRecentTrades({
  //       symbol: "BTCUSD_PERP",
  //       limit: 10,
  //     });
  //     expect(data).toBeDefined();
  //     expect(data).toHaveLength(10);
  //   });
  // });

  // describe("getAggregateTradesList", () => {
  //   test("Should get compressed/aggregate trades list for specific symbol", async () => {
  //     const data = await api.getAggregateTradesList({
  //       symbol: "BTCUSD_PERP",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get compressed/aggregate trades list for specific symbol with limit param", async () => {
  //     const data = await api.getAggregateTradesList({
  //       symbol: "BTCUSD_PERP",
  //       limit: 10,
  //     });
  //     expect(data).toBeDefined();
  //     expect(data).toHaveLength(10);
  //   });

  //   test("Should get compressed/aggregate trades list for specific symbol within a specific date range", async () => {
  //     const startTime = Date.now();
  //     const endTime = startTime - 86400000; // 24 hours ago
  //     const data = await api.getAggregateTradesList({
  //       symbol: "BTCUSD_PERP",
  //       startTime,
  //       endTime,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getIndexPriceAndMarkPrice", () => {
  //   test("Should get index price and mark price", async () => {
  //     const data = await api.getIndexPriceAndMarkPrice();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get index price and mark price for a specific symbol", async () => {
  //     const data = await api.getIndexPriceAndMarkPrice({
  //       symbol: "BTCUSD_PERP",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get index price and mark price for a specific pair", async () => {
  //     const data = await api.getIndexPriceAndMarkPrice({
  //       pair: "XRPUSD",
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getFundingRateHistoryOfPerpetualFutures", () => {
  //   test("Should get funding rate history of perpetual futures for a specific symbol", async () => {
  //     const data = await api.getFundingRateHistoryOfPerpetualFutures({
  //       symbol: "BTCUSD_PERP",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get funding rate history of perpetual futures for a specific symbol within a specific date range", async () => {
  //     const startTime = Date.now();
  //     const endTime = startTime - 86400000; // 24 hours ago
  //     const data = await api.getFundingRateHistoryOfPerpetualFutures({
  //       symbol: "BTCUSD_PERP",
  //       startTime,
  //       endTime,
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get funding rate history of perpetual futures for a specific symbol with limit", async () => {
  //     const data = await api.getFundingRateHistoryOfPerpetualFutures({
  //       symbol: "BTCUSD_PERP",
  //       limit: 1,
  //     });
  //     expect(data).toBeDefined();
  //     expect(data).toHaveLength(1);
  //   });
  // });

  // describe("getCandlestickData", () => {
  //   test("Should get candlestick data", async () => {
  //     const data = await api.getCandlestickData({
  //       symbol: "BTCUSD_PERP",
  //       interval: "1d",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get candlestick data within a specific date range", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.getCandlestickData({
  //       symbol: "BTCUSD_PERP",
  //       startTime,
  //       endTime,
  //       interval: "1d",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get candlestick data with limit", async () => {
  //     const data = await api.getCandlestickData({
  //       symbol: "BTCUSD_PERP",
  //       limit: 1,
  //       interval: "1d",
  //     });
  //     expect(data).toBeDefined();
  //     expect(data).toHaveLength(1);
  //   });
  // });

  // describe("getContinuousContractCandlestickData", () => {
  //   test("Should get continuous contract candlestick data", async () => {
  //     const data = await api.getContinuousContractCandlestickData({
  //       pair: "XRPUSD",
  //       interval: "1d",
  //       contractType: "PERPETUAL",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get continuous contract candlestick data withen a specific date range", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.getContinuousContractCandlestickData({
  //       pair: "XRPUSD",
  //       startTime,
  //       endTime,
  //       interval: "1d",
  //       contractType: "PERPETUAL",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get continuous contract candlestick data with limit", async () => {
  //     const data = await api.getContinuousContractCandlestickData({
  //       pair: "XRPUSD",
  //       limit: 1,
  //       interval: "1d",
  //       contractType: "PERPETUAL",
  //     });
  //     expect(data).toBeDefined();
  //     expect(data).toHaveLength(1);
  //   });
  // });

  // describe("getIndexPriceCandlestickData", () => {
  //   test("Should get index price candlestick data", async () => {
  //     const data = await api.getIndexPriceCandlestickData({
  //       pair: "XRPUSD",
  //       interval: "1d",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get index price candlestick data within a specific date range", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.getIndexPriceCandlestickData({
  //       pair: "XRPUSD",
  //       startTime,
  //       endTime,
  //       interval: "1d",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get index price candlestick data with limit", async () => {
  //     const data = await api.getIndexPriceCandlestickData({
  //       pair: "XRPUSD",
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
  //       symbol: "BTCUSD_PERP",
  //       interval: "1d",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get mark price candlestick data within a specific date range", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.getMarkPriceCandlestickData({
  //       symbol: "BTCUSD_PERP",
  //       startTime,
  //       endTime,
  //       interval: "1d",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get mark price candlestick data with limit", async () => {
  //     const data = await api.getMarkPriceCandlestickData({
  //       symbol: "BTCUSD_PERP",
  //       limit: 1,
  //       interval: "1d",
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
  //       symbol: "BTCUSD_PERP",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get 24hr ticker price change statistics for a specific pair", async () => {
  //     const data = await api.get24hrTickerPriceChangeStatistics({
  //       pair: "XRPUSD",
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
  //       symbol: "BTCUSD_PERP",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get symbol price ticker for a specific pair", async () => {
  //     const data = await api.getSymbolPriceTicker({
  //       pair: "XRPUSD",
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
  //       symbol: "BTCUSD_PERP",
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get symbol order book ticker for a specific pair", async () => {
  //     const data = await api.getSymbolOrderBookTicker({
  //       pair: "XRPUSD",
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getOpenInterest", () => {
  //   test("Should get open interest", async () => {
  //     const data = await api.getOpenInterest({
  //       symbol: "BTCUSD_PERP",
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });
});
