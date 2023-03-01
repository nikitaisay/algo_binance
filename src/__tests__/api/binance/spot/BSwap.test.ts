import { 
  test, 
  describe, 
  expect,
  beforeEach
} from "@jest/globals";

import { BinanceSpotBSwapApi } from "../../../../api/binance/spot/BSwap";

describe("Test Binance Spot BSwap API", () => {
  const api = new BinanceSpotBSwapApi({
    enableTestnet: false,
    apiKey: process.env.BINANCE_TESTNET_API_KEY,
    apiSecret: process.env.BINANCE_TESTNET_API_SECRET,
  });

  beforeEach(() => {
    jest.setTimeout(5000);
  });
  
  test("Should get List of All Swap Pools (MARKET_DATA)", async () => {
    try {
      const data = await api.getAllSwapPools();
      expect(data).toBeDefined();
    } catch (error) {
      throw new Error(`Request failed: ${error}`);
    }
  });

  test("Should Get liquidity information of a pool (USER_DATA)", async () => {
    try {
      const data = await api.getLiquidityInformationOfPool();
      expect(data).toBeDefined();
    } catch (error) {
      throw new Error(`Request failed: ${error}`);
    }
  });
});
