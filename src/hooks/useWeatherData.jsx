import { useState, useEffect } from "react";
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
    if (!city || /^\d+$/.test(city)) {
      setError("No locations found. Please try again.");
      return;
    }
    localStorage.setItem("lastCity", city);

    try {
      setLoading(true);
      setError(null);

      await new Promise((resolve) => setTimeout(resolve, 1500));

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

      const location = await getCoordinates(city);
      if (!location || !location.lat || !location.lon) {
        throw new Error("No locations found. Please try again.");
      }
      const { lat, lon } = location;
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
        }),
      );
    } catch (err) {
      setError(err.message || "Failed to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   const savedCity = localStorage.getItem("lastCity");
  //   if (savedCity) {
  //     fetchWeather(savedCity);
  //   }
  // }, []);

  return {
    weatherData,
    forecastData,
    loading,
    error,
    fetchWeather,
  };
}
