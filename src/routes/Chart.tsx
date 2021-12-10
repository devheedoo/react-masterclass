import { useQuery } from "react-query";
import { fetchOhlcv } from "../api";

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data: ohlcv } = useQuery(["ohlcv", coinId], () =>
    fetchOhlcv(coinId)
  );
  return <h1>Chart</h1>;
}

export default Chart;
