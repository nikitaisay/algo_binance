import { 
  test, 
  describe, 
  expect,
  beforeEach
} from "@jest/globals";

import { BinanceSpotMiningApi } from "../../../../api/binance/spot/mining";

describe("BinanceSpotMiningApi", () => {
  let api: BinanceSpotMiningApi;

  beforeEach(() => {
    api = new BinanceSpotMiningApi({
      enableTestnet: false, // BINANCE TESTNET DOESN'T SUPPORT /sapi ENDPOINTS
      apiKey: process.env.BINANCE_API_KEY,
      apiSecret: process.env.BINANCE_API_SECRET,
    });
  });

  test("Should check that api client is defined", () => {
    expect(api).toBeDefined();
  });

  // describe("getAcquiringAlgorithm", () => {
  //   test("Should get acquiring algorithm", async () => {
  //     const data = await api.getAcquiringAlgorithm();
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getAcquiringCoinName", () => {
  //   test("Should get acquiring coin name", async () => {
  //     const data = await api.getAcquiringCoinName();
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getHashrateResaleList", () => {
  //   test("Should get hashrate resale list", async () => {
  //     const data = await api.getHashrateResaleList();
  //     expect(data).toBeDefined();
  //   });
  // });
});
