import { convertTemp } from "../utils/convertTemp";

function CurrentWeather({
  data,
  unit = "metric",
  isFavorite,
  addFavorite,
  removeFavorite,
}) {
  const icon = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  // Get current date
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const currentDate = now.toLocaleDateString(undefined, options);
  const temp = Math.round(convertTemp(data.main.temp, unit));
  const feelsLike = Math.round(convertTemp(data.main.feels_like, unit));

  const cityName = data.name;
  const favorite = isFavorite(cityName);

  return (
    <div className="bg-white md:h-[300px] rounded-2xl p-6 shadow-md text-center flex md:gap-0 gap-4 justify-around items-center cursor-pointer">
      <div>
        {/* City */}
        <div className="flex items-center justify-center gap-3">
          <h1 className="md:text-3xl font-bold">{cityName}</h1>

          <i
            className={`text-xl cursor-pointer ${
              favorite
                ? "fa-solid fa-star text-yellow-400"
                : "fa-regular fa-star text-gray-400"
            }`}
            onClick={() => {
              if (favorite) {
                removeFavorite(cityName);
              } else {
                addFavorite(cityName);
              }
            }}
            aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
          ></i>
        </div>

        {/* Date */}
        <p className="text-gray-500 mt-1 text-sm md:text-xl">{currentDate}</p>
      </div>

      <div className="flex gap-9">
        <div>
          {/* Weather description */}
          <p className="text-gray-500 capitalize mt-1">
            {data.weather[0].description}
          </p>

          {/* Icon */}
          <img
            src={iconUrl}
            alt={data.weather[0].description}
            className="mx-auto w-20 md:h-20"
          />
        </div>
        <div>
          {/* Temperature */}
          <p className="text-6xl font-semibold">
            {temp}°{unit === "metric" ? "C" : "F"}
          </p>

          {/* Feels like */}
          <p className="text-gray-500 mt-1">
            Feels like {temp}°{unit === "metric" ? "C" : "F"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
