import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Container = styled.div`
  padding: 10px 20px;
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

const CoinList = styled.ul``;

const Coin = styled.div`
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.backgroundColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    display: flex;
    align-items: center;
    transition: color 0.2s ease-in;
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const coinsTop100 = (
        await (await fetch("https://api.coinpaprika.com/v1/coins")).json()
      ).slice(0, 10);
      setCoins(coinsTop100);
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      <CoinList>
        {isLoading
          ? "isLoading..."
          : coins.map((coin) => (
              <Coin key={coin.id}>
                <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
              </Coin>
            ))}
      </CoinList>
    </Container>
  );
}

export default Coins;
