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
      console.log(forecast.list);
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
    <div className="min-h-screen bg-sky-100">
      <div className="w-full max-w-md p-4">
        <SearchBar onSearch={handleSearch} />
        <div>
          <div>
            <img src="" alt="" />
          </div>
          {city && <p className="mt-4 text-gray-600">You Searched for: {city}</p>}
          {weatherData && <CurrentWeather data={weatherData} />}
        </div>

        {forecastData && (
          <div className="mt-6">
            <Forecast forecast={forecastData} />
          </div>
        )}

        {/* Current Weather */}
        {/* Hourly Forecast */}
        {/* Weekly Forecast */}
        {/* Details */}
      </div>
    </div>
  );
}

export default App;
