# Weather Dashboard App 🌤️

A **high-performance weather dashboard** built with **React.js**, providing real-time weather information with advanced features like caching, dynamic theming, and temperature unit toggle.

![Weather App Screenshot](./assets/images/screenshot.png) <!-- Optional: Add your screenshot -->

---

## 🚀 Features

- **Current Weather**: Shows city, temperature, "feels like," weather description, and date.  
- **5-Day Forecast**: Displays daily temperatures and conditions at 12:00 PM.  
- **Hourly Forecast**: Shows 3-hour interval forecasts in a scrollable sidebar.  
- **Temperature Unit Toggle**: Switch between Celsius (°C) and Fahrenheit (°F).  
- **Dynamic Theming**: Background and theme change according to weather conditions (e.g., rain, sun, snow).  
- **Caching**: Stores weather data in `localStorage` with a 10-minute expiration to reduce API calls and improve performance.  
- **Responsive Design**: Mobile-friendly layout using Tailwind CSS.  

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS  
- **State Management**: React Context (for unit toggle and preferences)  
- **API**: [OpenWeatherMap API](https://openweathermap.org/api)  
- **Utilities**: Custom date, time, and temperature conversion helpers  
- **Caching**: `localStorage` with TTL (time-to-live)  

---

## ⚡ How It Works

1. **Search for a city**: Users can type a city name in the search bar.  
2. **Fetches weather data**: App calls OpenWeatherMap API for current weather and forecast.  
3. **Caching**: Saves data in `localStorage` for 10 minutes to reduce API calls.  
4. **Dynamic UI**: Background and theme change based on the weather.  
5. **Unit toggle**: Users can switch between °C and °F; the toggle persists using React Context.  

---

## 📦 Installation

1. Clone the repo:

```bash
git clone https://github.com/tenthin/WeatherApp.git

cd weather-dashboard
npm install

VITE_OPENWEATHER_API_KEY=your_api_key_here
npm run dev
```
