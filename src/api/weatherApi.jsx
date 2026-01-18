const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


export async function getCoordinates(city) {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("City not found");
  }

  const data = await response.json();

  if (data.length === 0) {
    throw new Error("City not found");
  }

  return {
    lat: data[0].lat,
    lon: data[0].lon
  };
}

// ✔ New: Current Weather API 
export async function getCurrentWeather(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Weather data not available");
  }

  return response.json();
}

// ✔ New: 5-Day Forecast API
export async function getForecast(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Forecast data not available");
  }

  return response.json();
}
