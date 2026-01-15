import "../../src/App.css"

function HourlyForecast({ hourly }) {
  if (!hourly?.length) return null;

  return (
    <section className="bg-white p-5 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">
        Hourly Forecast (3-hour intervals)
      </h2>

      {/* Horizontal scroll container */}
      <div className="flex gap-4 flex-col max-h-[630px] overflow-y-auto custom-scroll" >
        {hourly.map((hour, index) => {
          const time = new Date(hour.dt * 1000).toLocaleTimeString([], {
            hour: "numeric",
          });

          return (
            <div
              key={index}
              className="bg-sky-100 rounded-xl shadow-md p-4 text-center flex justify-around items-center cursor-pointer"
            >
              <div className="flex gap-4">
                <p className="text-sm text-gray-600">{hour.weather[0].main}</p>
                <p className="text-sm text-gray-500">{time}</p>
              </div>

              <p className="text-2xl font-bold">
                {Math.round(hour.main.temp)}°C
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HourlyForecast;
