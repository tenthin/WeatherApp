import React from "react";

function Forecast({ forecast }) {
  if (!forecast?.list) return null;

  
  const dailyForecast = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-4">5 Day Forecast</h2>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-9">
        {dailyForecast.map((day, index) => {
          const date = new Date(day.dt * 1000).toLocaleDateString();
          const temp = Math.round(day.main.temp);
          const condition = day.weather[0].main;
          return (
            <div key={index} className="bg-white rounded-2xl shadow-md p-4 text-center">
              <p>{date}</p>
              <p>{temp}°C</p>
              <p>{condition}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Forecast;
