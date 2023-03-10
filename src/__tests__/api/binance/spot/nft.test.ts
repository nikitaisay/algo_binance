import { 
  test, 
  describe, 
  expect,
  beforeEach
} from "@jest/globals";

import { BinanceSpotNftApi } from "../../../../api/binance/spot/nft";

describe("BinanceSpotNftApi", () => {
  let api: BinanceSpotNftApi;

  beforeEach(() => {
    api = new BinanceSpotNftApi({
      enableTestnet: false, // BINANCE TESTNET DOESN'T SUPPORT /sapi ENDPOINTS
      apiKey: process.env.BINANCE_API_KEY,
      apiSecret: process.env.BINANCE_API_SECRET,
    });
  });

  test("Should check that api client is defined", () => {
    expect(api).toBeDefined();
  });

  // describe("getNftTransactionHistory", () => {
  //   test("Should get nft transaction history for purchase order", async () => {
  //     const data = await api.getNftTransactionHistory({
  //       orderType: 0,
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get nft transaction history for sell order", async () => {
  //     const data = await api.getNftTransactionHistory({
  //       orderType: 1,
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get nft transaction history for royalty income", async () => {
  //     const data = await api.getNftTransactionHistory({
  //       orderType: 2,
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get nft transaction history for primary market order", async () => {
  //     const data = await api.getNftTransactionHistory({
  //       orderType: 3,
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get nft transaction history for mint fee", async () => {
  //     const data = await api.getNftTransactionHistory({
  //       orderType: 4,
  //     });
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get nft transaction history for mint fee within a specific date range", async () => {
  //     const startTime = Date.now();
  //     const endTime = startTime - 86400000; // 24 hours ago
  //     const data = await api.getNftTransactionHistory({
  //       orderType: 4,
  //       startTime,
  //       endTime,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getNftDepositHistory", () => {
  //   test("Should get nft deposit history", async () => {
  //     const data = await api.getNftDepositHistory();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get nft deposit history within a specific date range", async () => {
  //     const startTime = Date.now();
  //     const endTime = startTime - 86400000; // 24 hours ago
  //     const data = await api.getNftDepositHistory({
  //       startTime,
  //       endTime,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getNftWithdrawHistory", () => {
  //   test("Should get nft withdraw history", async () => {
  //     const data = await api.getNftWithdrawHistory();
  //     expect(data).toBeDefined();
  //   });

  //   test("Should get nft withdraw history within a specific date range", async () => {
  //     const startTime = Date.now();
  //     const endTime = startTime - 86400000; // 24 hours ago
  //     const data = await api.getNftWithdrawHistory({
  //       startTime,
  //       endTime,
  //     });
  //     expect(data).toBeDefined();
  //   });
  // });

  // describe("getNftAsset", () => {
  //   test("Should get nft asset", async () => {
  //     const data = await api.getNftAsset();
  //     expect(data).toBeDefined();
  //   });
  // });
});
