import { formatDate } from "../utils/formatDate";
import { convertTemp } from "../utils/convertTemp";


function Forecast({ forecast, unit = "metric" }) {
  if (!forecast?.list) return null;

  // Filter for 12:00 PM forecasts
  const dailyForecast = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Daily Forecast</h2>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
        {dailyForecast.map((day, index) => {
          const temp = Math.round(convertTemp(day.main.temp, unit));
          const condition = day.weather[0].main;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 text-center cursor-pointer"
            >
              <p className="text-gray-500">{formatDate(day.dt)}</p>
              <p className="text-2xl font-semibold">
                {Math.round(temp)}°{unit === "metric" ? "C" : "F"}
              </p>
              <p className="capitalize text-gray-600">{condition}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;
