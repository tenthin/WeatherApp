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

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleSearch = async (city) => {
    try {
      const { lat, lon } = await getCoordinates(city);

      const current = await getCurrentWeather(lat, lon);
      const forecast = await getForecast(lat, lon);

      setWeatherData(current);
      setForecastData(forecast);
      setCity(city);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-sky-100">
      <SearchBar onSearch={handleSearch} />
      <div className="w-[80%] m-auto">
        <p>How's Weather looking today?</p>
        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">
            {weatherData && <CurrentWeather data={weatherData} />}

            {forecastData && <Forecast forecast={forecastData} />}
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-1">
            {forecastData && (
              <HourlyForecast hourly={forecastData.list} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
