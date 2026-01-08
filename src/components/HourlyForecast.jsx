function HourlyForecast({ hourly }) {
  if (!hourly?.length) return null;

  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold mb-4">
        Hourly Forecast (3-hour intervals)
      </h2>

      {/* Horizontal scroll container */}
      <div className="flex gap-4 overflow-x-auto pb-3">
        {hourly.slice(0, 8).map((hour, index) => {
          const time = new Date(hour.dt * 1000).toLocaleTimeString([], {
            hour: "numeric",
          });

          return (
            <div
              key={index}
              className="min-w-[130px] bg-white rounded-xl shadow-md p-4 text-center"
            >
              <p className="text-sm text-gray-500">{time}</p>

              <p className="text-2xl font-bold">
                {Math.round(hour.main.temp)}°C
              </p>

              <p className="text-sm text-gray-600">
                {hour.weather[0].main}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HourlyForecast;
