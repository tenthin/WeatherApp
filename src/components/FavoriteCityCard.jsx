function FavoriteCityCard({ city, temp, unit, onSelect, onRemove }) {

  return (
    <div
    onClick={onSelect}
      className="bg-white rounded-xl shadow-md p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 gap-4 text-gray-600 ">
        <button onClick={(e) => {
            e.stopPropagation();
            onRemove();
        }} className="text-yellow-500">

      <i className="fa-regular fa-star"></i>
        </button>
      <p className="flex-1 font-medium text-black">{city}</p>
      <p className="font-semibold">{temp}°{unit === "metric" ? "C" :"F"}</p>
    </div>
  );
}
export default FavoriteCityCard;
