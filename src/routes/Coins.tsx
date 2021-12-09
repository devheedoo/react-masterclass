import styled from "styled-components";

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
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 10px;
`;

function Coins() {
  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      <CoinList>
        <Coin>BTC</Coin>
        <Coin>BTC</Coin>
        <Coin>BTC</Coin>
      </CoinList>
    </Container>
  );
}

export default Coins;
