import { useState } from "react";
import {
  getCoordinates,
  getCurrentWeather,
  getForecast,
} from "../api/weatherApi";

export function useWeatherData() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError(null);

      const cacheKey = `weather-${city.toLowerCase()}`;
      const cachedData = localStorage.getItem(cacheKey);
      const CACHE_TIME = 10 * 60 * 1000;

      if (cachedData) {
        const parsed = JSON.parse(cachedData);

        if (Date.now() - parsed.timestamp < CACHE_TIME) {
          setWeatherData(parsed.current);
          setForecastData(parsed.forecast);
          return;
        }
      }

      const { lat, lon } = await getCoordinates(city);
      const current = await getCurrentWeather(lat, lon);
      const forecast = await getForecast(lat, lon);

      setWeatherData(current);
      setForecastData(forecast);

      localStorage.setItem(
        cacheKey,
        JSON.stringify({
          current,
          forecast,
          timestamp: Date.now(),
        })
      );
    } catch (err) {
      setError(err.message || "Failed to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  return {
    weatherData,
    forecastData,
    loading,
    error,
    fetchWeather,
  };
}
