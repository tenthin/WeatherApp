import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import HourlyForecast from "./components/HourlyForecast";
import { getWeatherTheme } from "./utils/getWeatherTheme";
import { useWeather } from "./context/WeatherContext";
import { useWeatherData } from "./hooks/useWeatherData";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const { unit, toggleUnit } = useWeather();

  const { weatherData, forecastData, loading, error, fetchWeather } =
    useWeatherData();

  const theme = weatherData
    ? getWeatherTheme(weatherData.weather[0].main)
    : "default";

  return (
    <div className={`min-h-screen transition-all duration-500 ${theme}`}>
      <div className="w-[80%] m-auto">
        <div className="flex flex-col items-center">
          <p className="text-4xl m-9">How's the sky looking today?</p>

          <SearchBar onSearch={fetchWeather} />

          <button
            onClick={toggleUnit}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Switch to {unit === "metric" ? "°F" : "°C"}
          </button>
        </div>

        {/* Loading UI */}
        {loading && <p className="text-center mt-6">Loading weather...</p>}

        {/* Error UI */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <ErrorBoundary>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2 space-y-6">
              {weatherData && <CurrentWeather data={weatherData} unit={unit} />}
              {forecastData && <Forecast forecast={forecastData} unit={unit} />}
            </div>

            <div className="lg:col-span-1">
              {forecastData && (
                <HourlyForecast hourly={forecastData.list} unit={unit} />
              )}
            </div>
          </div>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
