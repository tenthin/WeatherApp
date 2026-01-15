export function getWeatherTheme(condition) {
  if (!condition) return "default";

  switch (condition.toLowerCase()) {
    case "clear":
      return "sunny";
    case "rain":
    case "drizzle":
      return "rainy";
    case "clouds":
      return "cloudy";
    case "snow":
      return "snowy";
    case "thunderstorm":
      return "stormy";
    default:
      return "default";
  }
}
