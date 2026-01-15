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

  //toggle temp
  const [unit, setUnit] = useState("metric");

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

  //Toggle function
  const toggleUnit = () => {
    setUnit((prev) => (prev === "metric" ? "imperial" : "metric"));
  };

  return (
    <div className="min-h-screen bg-sky-100">
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
            {weatherData && <CurrentWeather data={weatherData} unit={unit}/>}

            {forecastData && <Forecast forecast={forecastData} unit={unit}/>}
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-1">
            {forecastData && <HourlyForecast hourly={forecastData.list} unit={unit}/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
