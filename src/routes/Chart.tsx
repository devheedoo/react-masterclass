import { useQuery } from "react-query";
import { fetchOhlcv } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
}

interface IOhlcv {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data: ohlcv } = useQuery<IOhlcv[]>(["ohlcv", coinId], () =>
    fetchOhlcv(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: ohlcv?.map((price) => price.close),
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              labels: { show: false },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
