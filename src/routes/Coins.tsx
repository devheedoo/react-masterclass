import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchAllCoins } from "../api";

interface ICoin {
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

const CoinList = styled.ul``;

const Loader = styled.div`
  display: block;
  text-align: center;
`;

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

const CoinImage = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 5px;
`;

function Coins() {
  // useQuery = useState + loading + caching
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchAllCoins);

  const title = "Coins";

  return (
    <Container>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header>
        <Title>{title}</Title>
      </Header>
      <CoinList>
        {isLoading
          ? "Loading..."
          : data?.slice(0, 10).map((coin) => (
              <Coin key={coin.id}>
                <Link
                  to={{
                    pathname: `/${coin.id}`,
                    state: { name: coin.name },
                  }}
                >
                  <CoinImage
                    src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  />
                  {coin.name} &rarr;
                </Link>
              </Coin>
            ))}
      </CoinList>
    </Container>
  );
}

export default Coins;
