function FavoritesList({ favorites, fetchWeather }) {
  if (favorites.length === 0) {
    return (
      <p className="text-gray-500 text-center">No favorite cities yet ⭐</p>
    );
  }
  return (
    <div>
      <h3>Favorite Cities</h3>

      <ul>
        {favorites.map((city) => {
          return (
            <li key={city}>
              <button onClick={() => fetchWeather(city)}>{city}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default FavoritesList;
