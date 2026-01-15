export const formatDate = (dt) => {
  const date = new Date(dt * 1000); // OpenWeather gives timestamp in seconds
  return date.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" });
};
