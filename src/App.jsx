import { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import {
  getCoordinates,
  getCurrentWeather,
  getForecast,
} from "./api/weatherApi";
import Forecast from "./components/Forecast";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleSearch = async (city) => {
    try {
      //get coordinate for the city
      const { lat, lon } = await getCoordinates(city);

      //get full weather data using one Call API
      const current = await getCurrentWeather(lat, lon);

      const forecast = await getForecast(lat, lon);
      console.log(forecast.list)
      // save data in state
      setWeatherData(current);
      setForecastData(forecast);
      // also update city text
      setCity(city);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-w-screen min-h-screen">
      {/* <div className=""> */}
      <SearchBar onSearch={handleSearch} />
      <div>
        <div>
          <img src="" alt="" />
        </div>
        {city && <p>You Searched for: {city}</p>}
        {weatherData && <CurrentWeather data={weatherData} />}
      </div>

      {forecastData && (
        <div className="bg-white p-4 mt-4 rounded-lg">
          <Forecast forecast={forecastData} />
        </div>
      )}

      {/* Current Weather */}
      {/* Hourly Forecast */}
      {/* Weekly Forecast */}
      {/* Details */}
      {/* </div> */}
    </div>
  );
}

export default App;
