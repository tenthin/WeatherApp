import { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import {
  getCoordinates,
  getCurrentWeather,
  getForecast,
} from "./api/weatherApi";
import Forecast from "./components/Forecast";
import HourlyForecast from "./components/HourlyForecast";
import { getWeatherTheme } from "./utils/getWeatherTheme";
import { useWeather } from "./context/WeatherContext";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const theme = weatherData
    ? getWeatherTheme(weatherData.weather[0].main)
    : "default";

  //toggle temp
  const { unit, toggleUnit } = useWeather();

  const handleSearch = async (city) => {
    try {
      const cacheKey = `weather-${city.toLowerCase()}`;
      const cachedData = localStorage.getItem(cacheKey);
      const CACHE_TIME = 10 * 60 * 1000; // 10 minutes

      // Check Cache
      if (cachedData) {
        const parsed = JSON.parse(cachedData);

        if (Date.now() - parsed.timestamp < CACHE_TIME) {
          console.log("Using cached data for:",city)

          setWeatherData(parsed.current);
          setForecastData(parsed.forecast);
          return;
        }else{
          console.log("Cache expired for:",city)
        }
      }

      // Fetch Data
      const { lat, lon } = await getCoordinates(city);
      const current = await getCurrentWeather(lat, lon);
      const forecast = await getForecast(lat, lon);

      setWeatherData(current);
      setForecastData(forecast);
      setCity(city);

      // Save to Cache
      localStorage.setItem(
        cacheKey,
        JSON.stringify({
          current,
          forecast,
          timestamp: Date.now(),
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${theme}`}>
      <div className="w-[80%] m-auto">
        <div className="flex flex-col items-center">
          <p className="text-4xl m-9">How's the sky looking today?</p>
          <SearchBar onSearch={handleSearch} />
          {/* Unit toggle button */}
          <button
            onClick={toggleUnit}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Switch to {unit === "metric" ? "°F" : "°C"}
          </button>
        </div>
        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">
            {weatherData && <CurrentWeather data={weatherData} unit={unit} />}

            {forecastData && <Forecast forecast={forecastData} unit={unit} />}
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-1">
            {forecastData && (
              <HourlyForecast hourly={forecastData.list} unit={unit} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
