import { Link } from "react-router-dom";
import styled from "styled-components";

const coinsSample = [
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "bnb-binance-coin",
    name: "Binance Coin",
    symbol: "BNB",
    rank: 3,
    is_new: false,
    is_active: true,
    type: "coin",
  },
];

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
  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      <CoinList>
        {coinsSample.map((coin) => (
          <Coin key={coin.id}>
            <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
          </Coin>
        ))}
      </CoinList>
    </Container>
  );
}

export default Coins;
