export const convertTemp = (temp, unit) => {
  return unit === "metric" ? temp : (temp * 9) / 5 + 32;
};
