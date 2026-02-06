import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { convertTemp } from "../../utils/convertTemp";

function TemperatureChart({ hourly, unit }) {
  if (!hourly?.length) return null;

  const chartData = hourly.slice(0, 8).map((hour) => ({
    time: new Date(hour.dt * 1000).toLocaleTimeString([], {
      hour: "numeric",
    }),
    temp: Math.round(convertTemp(hour.main.temp, unit)),
  }));

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">
        Temperature Trend (Next 24 Hours)
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={chartData}>
          <XAxis dataKey="time" />
          <YAxis
            label={{
              value: unit === "metric" ? "°C" : "°F",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip
            formatter={(value) => `${value}°${unit === "metric" ? "C" : "F"}`}
          />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#3b6df6"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TemperatureChart;
