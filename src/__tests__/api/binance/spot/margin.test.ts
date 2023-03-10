import { 
  test, 
  describe, 
  expect,
  beforeEach
} from "@jest/globals";

import { BinanceSpotMarginApi } from "../../../../api/binance/spot/margin";

describe("BinanceSpotMarginApi", () => {
  let api: BinanceSpotMarginApi;

  beforeEach(() => {
    api = new BinanceSpotMarginApi({
      enableTestnet: false, // BINANCE TESTNET DOESN'T SUPPORT /sapi ENDPOINTS
      apiKey: process.env.BINANCE_API_KEY,
      apiSecret: process.env.BINANCE_API_SECRET,
    });
  });

  test("Should check that api client is defined", () => {
    expect(api).toBeDefined();
  });
});
