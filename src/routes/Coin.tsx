import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
`;

const Loader = styled.div`
  display: block;
  text-align: center;
`;

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  // tags: object;
  // team: object;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  // links: object;
  // links_extended: object;
  // whitepaper: object;
  first_data_at: string;
  last_data_at: string;
}

interface ITicker {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: number;
    };
  };
}

function Coin() {
  const [isLoading, setLoading] = useState(true);
  const [coin, setCoin] = useState<ICoin>();
  const [ticker, setTicker] = useState<ITicker>();

  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();

  useEffect(() => {
    (async () => {
      const coinJSON = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const tickerJSON = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setCoin(coinJSON); // description
      setTicker(tickerJSON); // quotes.USD.ticker
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        {/* React Route로 전달 받기 때문에 직접 URL 접근 시 값이 없음 */}
        <Title>{state?.name ?? "Loading"}</Title>
      </Header>
      {isLoading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}

export default Coin;
