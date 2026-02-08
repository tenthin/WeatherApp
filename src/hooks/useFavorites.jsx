import { useState, useEffect } from "react";

function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");

    if (!storedFavorites) return;
    try {
      const parsed = JSON.parse(storedFavorites);
      setFavorites(Array.isArray(parsed) ? parsed : []);
    } catch (error) {
      console.error("Failed to parse favorites from localStorage", error);
      localStorage.removeItem("favorites");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function addFavorite(cityName) {
    const alreadyExists = favorites.some(
      (city) => city.toLowerCase() === cityName.toLowerCase(),
    );
    if (alreadyExists) return;
    setFavorites([...favorites, cityName]);
  }

  function removeFavorite(cityName) {
    setFavorites(
      favorites.filter((city) => city.toLowerCase() !== cityName.toLowerCase()),
    );
  }

  function isFavorite(cityName) {
    return favorites.some(
      (city) => city.toLowerCase() === cityName.toLowerCase(),
    );
  }

  return { favorites, addFavorite, removeFavorite, isFavorite };
}

export default useFavorites;
