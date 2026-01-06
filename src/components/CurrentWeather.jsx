import React from "react";

function CurrentWeather({ data }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md text-center mt-4">
      {/*City */}
      <h1 className="text-3xl font-bold">{data.name}</h1>
      {/*Weather description */}
      <p className="text-gray-500 capitalize mt-1">{data.weather[0].description}</p>
      {/*Temperature */}
      <p className="text-6xl font-semibold mt-4">{Math.round(data.main.temp)}C</p>
    </div>
  );
}

export default CurrentWeather;
