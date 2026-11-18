import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [unit, setUnit] = useState("metric");

  const toggleUnit = () => {
    setUnit((prev) => (prev === "metric" ? "imperial" : "metric"));
  };

  return (
    <WeatherContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </WeatherContext.Provider>
  );
}

// Custom hook
export function useWeather() {
  return useContext(WeatherContext);
}
