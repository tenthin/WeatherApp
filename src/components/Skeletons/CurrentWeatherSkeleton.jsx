function CurrentWeatherSkeleton() {
  return (
    <div className="bg-gray-200 animate-pulse md:h-[300px] rounded-2xl p-6 shadow-md flex justify-around items-center">
      
      {/* City + Date */}
      <div className="space-y-3">
        <div className="h-6 w-32 bg-gray-300 rounded"></div>
        <div className="h-4 w-40 bg-gray-300 rounded"></div>
      </div>

      {/* Description + Icon */}
      <div className="space-y-4 flex flex-col items-center">
        <div className="h-4 w-24 bg-gray-300 rounded"></div>
        <div className="h-20 w-20 bg-gray-300 rounded-full"></div>
      </div>

      {/* Temperature */}
      <div className="space-y-3">
        <div className="h-12 w-24 bg-gray-300 rounded"></div>
        <div className="h-4 w-32 bg-gray-300 rounded"></div>
      </div>

    </div>
  );
}

export default CurrentWeatherSkeleton;
