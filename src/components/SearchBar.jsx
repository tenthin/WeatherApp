import { useState } from "react";

function SearchBar({ onSearch }) {
  //create state variable 'city'
  const [city, setCity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city) return;
    onSearch(city);
    setCity("");
  };

  return (
    <div className="bg-orange-400 p-5">
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          className="border rounded-lg p-2 text-white"
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
