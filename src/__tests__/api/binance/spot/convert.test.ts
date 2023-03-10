import { 
  test, 
  describe, 
  expect,
  beforeEach
} from "@jest/globals";

import { BinanceSpotConvertApi } from "../../../../api/binance/spot/convert";

describe("BinanceSpotConvertApi", () => {
  let api: BinanceSpotConvertApi;

  beforeEach(() => {
    api = new BinanceSpotConvertApi({
      enableTestnet: false, // BINANCE TESTNET DOESN'T SUPPORT /sapi ENDPOINTS
      apiKey: process.env.BINANCE_API_KEY,
      apiSecret: process.env.BINANCE_API_SECRET,
    });
  });

  test("Should check that api client is defined", () => {
    expect(api).toBeDefined();
  });

  // describe("getListOfAllConvertPairs", () => {
  //   test("Should get list of all convert pairs (USER_DATA)", async () => {
  //     const data = await api.getListOfAllConvertPairs({
  //       fromAsset: "BTC",
  //       toAsset: "USDT",
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("queryOrderQuantityPrecisionPerAsset", () => {
  //   test("Should query order quantity precision per asset (USER_DATA)", async () => {
  //     const data = await api.queryOrderQuantityPrecisionPerAsset();
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getConvertTradeHistory", () => {
  //   test("Should get convert trade history (USER_DATA)", async () => {
  //     const endTime = Date.now();
  //     const startTime = endTime - 86400000; // 24 hours ago
  //     const data = await api.getConvertTradeHistory({
  //       startTime,
  //       endTime,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });
});
