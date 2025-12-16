import React from "react";

function Forecast({ forecast }) {
  return (
    <div>
      <h2>5 Day Forecast</h2>
      <div>
        {forecast.list.map((day, index) => {
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
