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
