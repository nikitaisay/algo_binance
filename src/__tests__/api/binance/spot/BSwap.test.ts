import { 
  test, 
  describe, 
  expect,
  beforeEach
} from "@jest/globals";

import { BinanceSpotBSwapApi } from "../../../../api/binance/spot/BSwap";

describe("Test Binance Spot BSwap API", () => {
  let api: BinanceSpotBSwapApi;
 
  beforeEach(() => {
    api = new BinanceSpotBSwapApi({
      enableTestnet: false,
      apiKey: process.env.BINANCE_TESTNET_API_KEY,
      apiSecret: process.env.BINANCE_TESTNET_API_SECRET,
    });
  });

  describe("getAllSwapPools", () => {
    test("Should get List of All Swap Pools (MARKET_DATA)", async () => {
      const data = await api.getAllSwapPools();
      expect(data).toBeDefined();
    });
  });

  // describe("getLiquidityInformationOfPool", () => {
  //   test("Should get liquidity information of a pool (USER_DATA)", async () => {
  //     const data = await api.getLiquidityInformationOfPool();
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getLiquidityOperationRecord", () => {
  //   test("Should get liquidity operation record (USER_DATA)", async () => {
  //     const data = await api.getLiquidityOperationRecord();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get liquidity operation record (USER_DATA) within a specific date range", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.getLiquidityOperationRecord({
  //       startTime,
  //       endTime,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getRequestQuote", () => {
  //   test("Should request quote (USER_DATA)", async () => {
  //     const data = await api.getRequestQuote({
  //       quoteAsset: "USDT",
  //       baseAsset: "BUSD",
  //       quoteQty: 300000,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getSwapHistory", () => {
  //   test("Should get swap history (USER_DATA)", async () => {
  //     const data = await api.getSwapHistory();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get swap history (USER_DATA) for a specific swap id", async () => {
  //     const data = await api.getSwapHistory({
  //       swapId: 2314,
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get swap history (USER_DATA) within a specific date range", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.getSwapHistory({
  //       startTime,
  //       endTime,
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get swap history (USER_DATA) for a specific status", async () => {
  //     const data = await api.getSwapHistory({
  //       status: 0,
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get swap history (USER_DATA) for a specific asset", async () => {
  //     const data = await api.getSwapHistory({
  //       quoteAsset: "USDT",
  //       baseAsset: "BUSD",
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getPoolConfigure", () => {
  //   test("Should get pool configure (USER_DATA)", async () => {
  //     const data = await api.getPoolConfigure();
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("addLiquidityPreview", () => {
  //   test("Should add liquidity preview (USER_DATA)", async () => {
  //     const data = await api.addLiquidityPreview({
  //       poolId: 2,
  //       type: "SINGLE",
  //       quoteAsset: "USDT",
  //       quoteQty: 1,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("removeLiquidityPreview", () => {
  //   test("Should remove liquidity preview (USER_DATA)", async () => {
  //     const data = await api.removeLiquidityPreview({
  //       poolId: 2,
  //       type: "SINGLE",
  //       quoteAsset: "USDT",
  //       shareAmount: 1,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getUnclaimedRewardsRecord", () => {
  //   test("Should get unclaimed rewards record (USER_DATA)", async () => {
  //     const data = await api.getUnclaimedRewardsRecord();
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getClaimedHistory", () => {
  //   test("Should get claimed history (USER_DATA)", async () => {
  //     const data = await api.getClaimedHistory();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get claimed history (USER_DATA) within a specific date range", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.getClaimedHistory({
  //       startTime,
  //       endTime,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });
});
