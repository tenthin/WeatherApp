function ForecastSkeleton() {
  return (
    <div>
      {/* Title */}
      <div className="h-6 w-40 bg-gray-300 rounded mb-4 animate-pulse"></div>

      {/* Forecast cards */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-2xl shadow-md p-4 text-center animate-pulse space-y-3"
          >
            <div className="h-4 w-20 bg-gray-300 rounded mx-auto"></div>
            <div className="h-6 w-12 bg-gray-300 rounded mx-auto"></div>
            <div className="h-4 w-16 bg-gray-300 rounded mx-auto"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForecastSkeleton;
