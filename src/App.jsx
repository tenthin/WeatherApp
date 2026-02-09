import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import HourlyForecast from "./components/HourlyForecast";
import { getWeatherTheme } from "./utils/getWeatherTheme";
import { useWeather } from "./context/WeatherContext";
import { useWeatherData } from "./hooks/useWeatherData";
import ErrorBoundary from "./components/ErrorBoundary";
import CurrentWeatherSkeleton from "./components/Skeletons/CurrentWeatherSkeleton";
import ForecastSkeleton from "./components/Skeletons/ForecastSkeleton";
import HourlyForecastSkeleton from "./components/Skeletons/HourlyForecastSkeleton";
import TemperatureChart from "./components/Charts/TemperatureChart";
import useFavorites from "./hooks/useFavorites";
import FavoritesList from "./components/FavoritesList";

function App() {
  const { unit, toggleUnit } = useWeather();
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();

  const { weatherData, forecastData, loading, error, fetchWeather } =
    useWeatherData();

  const theme = weatherData
    ? getWeatherTheme(weatherData.weather[0].main)
    : "default";

  let content = null;
  if (error) {
    content = <p className="text-red-500 text-center mt-6">{error}</p>;
  } else if (loading) {
    content = (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <CurrentWeatherSkeleton />
          <ForecastSkeleton />
        </div>

        <div className="lg:col-span-1">
          <HourlyForecastSkeleton />
        </div>
      </div>
    );

  } else if (weatherData && forecastData) {
    content = (
      <ErrorBoundary>
        <FavoritesList favorites={favorites} fetchWeather={fetchWeather}/>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 space-y-6">
            <CurrentWeather
              data={weatherData}
              unit={unit}
              isFavorite={isFavorite}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
            />

            <Forecast forecast={forecastData} unit={unit} />
          </div>

          <div className="lg:col-span-1">
            <TemperatureChart hourly={forecastData.list} unit={unit} />
            <HourlyForecast hourly={forecastData.list} unit={unit} />
          </div>
        </div>
      </ErrorBoundary>
    );
  }

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

        {content}
      </div>
    </div>
  );
}

export default App;
