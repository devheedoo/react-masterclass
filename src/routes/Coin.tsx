import { useParams } from "react-router";

interface CoinProps {
  coinId: string;
}

function Coin() {
  const { coinId } = useParams<CoinProps>();
  return <h1>Coin: {coinId}</h1>;
}

export default Coin;
