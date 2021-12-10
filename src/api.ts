const COINPAPRIKA_BASE_URL = "https://api.coinpaprika.com/v1";

export function fetchAllCoins() {
  return fetch(`${COINPAPRIKA_BASE_URL}/coins`).then((res) => res.json());
}

export function fetchCoin(coinId: string) {
  return fetch(`${COINPAPRIKA_BASE_URL}/coins/${coinId}`).then((res) =>
    res.json()
  );
}

export function fetchTicker(coinId: string) {
  return fetch(`${COINPAPRIKA_BASE_URL}/tickers/${coinId}`).then((res) =>
    res.json()
  );
}

export function fetchOhlcv(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 7 * 24 * 60 * 60;
  return fetch(
    `${COINPAPRIKA_BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((res) => res.json());
}
