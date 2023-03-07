import { 
  test, 
  describe, 
  expect,
  beforeEach
} from "@jest/globals";

import { BinanceSpotGiftCardsApi } from "../../../../api/binance/spot/giftCard";

describe("BinanceSpotGiftCardsApi", () => {
  let api: BinanceSpotGiftCardsApi;

  beforeEach(() => {
    api = new BinanceSpotGiftCardsApi({
      enableTestnet: false,
      apiKey: process.env.BINANCE_TESTNET_API_KEY,
      apiSecret: process.env.BINANCE_TESTNET_API_SECRET,
    });
  });

  describe("getRSAPublicKey", () => {
    test("Should get token limit", async () => {
      const data = await api.getTokenLimit({
        baseToken: "BUSD",
      });
      expect(data).toBeDefined();
    });
  });

  // Please note that the RSA Public key fetched is valid only for the current day.
  describe("getTokenLimit", () => {
    test("Should get RSA public key", async () => {
      const data = await api.getRSAPublicKey();
      expect(data).toBeDefined();
    });
  });
});
