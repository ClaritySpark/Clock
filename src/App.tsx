import React, { useState } from "react";
import { City, TIME_ZONES } from "./types";
import Dropdown from "./components/Dropdown";
import BasicClock from "./components/BasicClock";

const App: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<City>(TIME_ZONES[0].city);

  const handleCityChange = (city: City) => {
    setSelectedCity(city);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">World Clock</h1>
      <Dropdown value={selectedCity} onChange={handleCityChange} />
      <div className="mt-4">
        <BasicClock city={selectedCity} />
      </div>
    </div>
  );
};

export default App;
