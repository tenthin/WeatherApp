function HourlyForecastSkeleton () {

    return (
        <section className="bg-white p-5 rounded-2xl shadow-md animate-pulse">
            {/* title */}
            <div className="h-5 w-48 bg-gray-300 rounded mb-4"></div>

            {/* scroll container */}
            <div className="flex flex-col gap-4 max-h-[630px] overflow-y-auto custom-scroll">
                {Array.from({length: 6}).map((_,index) => (
                    <div key={index} className="bg-gray-200 rounded-xl shadow-md p-4 flex justify-around items-center">
                        {/* condition + time */}
                        <div className="flex gap-4">
                            <div className="h-4 w-16 bg-grya-300 rounded"></div>
                            <div className="h-4 w-10 bg-gray-300 rounded"></div>
                        </div>

                        {/* temperature */}
                        <div className="h-5 w-12 bg-gray-300 rounded"></div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default HourlyForecastSkeleton;