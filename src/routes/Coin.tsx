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

function Coin() {
  const [isLoading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const [price, setPrice] = useState({});

  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();

  useEffect(() => {
    (async () => {
      const detailJSON = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceJSON = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setDetail(detailJSON); // description
      setPrice(priceJSON); // quotes.USD.price
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
