import React from "react";

function CurrentWeather({ data }) {
  const icon = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  // Get current date
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const currentDate = now.toLocaleDateString(undefined, options);

  return (
    <div className="bg-white h-[300px] rounded-2xl p-6 shadow-md text-center flex justify-around items-center">
      <div>
        {/* City */}
        <h1 className="text-3xl font-bold">{data.name}</h1>

        {/* Date */}
        <p className="text-gray-500 mt-1">{currentDate}</p>
      </div>

      <div>
        {/* Weather description */}
        <p className="text-gray-500 capitalize mt-1">
          {data.weather[0].description}
        </p>

        {/* Icon */}
        <img
          src={iconUrl}
          alt={data.weather[0].description}
          className="mx-auto w-20 h-20"
        />
      </div>

      <div>
        {/* Temperature */}
        <p className="text-6xl font-semibold">{Math.round(data.main.temp)}°C</p>

        {/* Feels like */}
        <p className="text-gray-500 mt-1">
          Feels like {Math.round(data.main.feels_like)}°C
        </p>
      </div>

      {/* Min / Max */}
      <div className="flex justify-center gap-6 mt-4 text-gray-600">
        <p>⬇ {Math.round(data.main.temp_min)}°C</p>
        <p>⬆ {Math.round(data.main.temp_max)}°C</p>
      </div>
    </div>
  );
}

export default CurrentWeather;
