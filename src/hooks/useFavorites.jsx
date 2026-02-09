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

  function addFavorite(fav) {
    const alreadyExists = favorites.some(
      (f) =>
        f.lat === fav.lat && f.lon === fav.lon
    );

    if (alreadyExists) return;

    setFavorites([...favorites, fav]);
  }

  function removeFavorite(cityName) {
    setFavorites(
      favorites.filter(
        (fav) => fav.city.toLowerCase() !== cityName.toLowerCase(),
      ),
    );
  }

  function isFavorite(cityName) {
    return favorites.some(
      (fav) => fav.city.toLowerCase() === cityName.toLowerCase(),
    );
  }

  return { favorites, addFavorite, removeFavorite, isFavorite };
}

export default useFavorites;
