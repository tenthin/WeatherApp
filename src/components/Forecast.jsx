import React from "react";

function Forecast({ forecast }) {
  if (!forecast?.list) return null;

  
  const dailyForecast = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div>
      <h2>5 Day Forecast</h2>
      <div>
        {dailyForecast.map((day, index) => {
          const date = new Date(day.dt * 1000).toLocaleDateString();
          const temp = Math.round(day.main.temp);
          const condition = day.weather[0].main;
          return (
            <div key={index}>
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
