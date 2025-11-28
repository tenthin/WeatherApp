import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [city,setCity] = useState("");

  const handleSearch = (city) => {
    console.log("use searched for:", city);
    setCity(city);
  };
  return (
    <div className="bg-blue-300 min-w-screen min-h-screen">
      {/* <div className=""> */}
      <SearchBar onSearch={handleSearch} />
      {city && <p>You Searched for: {city}</p>}
      {/* Current Weather */}
      {/* Hourly Forecast */}
      {/* Weekly Forecast */}
      {/* Details */}
      {/* </div> */}
    </div>
  );
}

export default App;
