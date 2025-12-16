import React from "react";

function CurrentWeather({ data }) {
  return (
    <div>
      {/*City */}
      <div>{data.name}</div>
      {/*Weather description */}
      <p>{data.weather[0].description}</p>
      {/*Temperature */}
      <p>{Math.round(data.main.temp)}C</p>
    </div>
  );
}

export default CurrentWeather;
