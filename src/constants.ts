export const DEFAULT_REQUEST_ERROR_MESSAGE = "Request error occured";

export const BINANCE_API_URLS = {
  PERPETUAL_FUTURES: {
    MARKET: {
      BASE: "https://fapi.binance.com",
      TESTNET: "https://testnet.binancefuture.com",
    },
  },
  EUROPEAN_OPTIONS: {
    MARKET: {
      BASE: "https://eapi.binance.com",
      TESTNET: "https://testnet.binance.com",
    },
  },
  SPOT: {
    MARKET: {
      BASE: "https://api.binance.com",
      TESTNET: "https://testnet.binance.vision",
    },
  },
  DELIVERY_FUTURES: {
    MARKET: {
      BASE: "https://dapi.binance.com",
      TESTNET: "https://testnet.binancefuture.com",
    },
  },
};
