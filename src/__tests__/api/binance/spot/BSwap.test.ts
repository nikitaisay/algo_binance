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
  //   test("Should Get liquidity information of a pool (USER_DATA)", async () => {
  //     const data = await api.getLiquidityInformationOfPool();
  //     expect(data).toBeDefined();
  //   });
  // });
});
