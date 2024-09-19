import React from "react";
import { City, TIME_ZONES } from "../../types";

interface DropdownProps {
  value: City;
  onChange: (value: City) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as City)}
      className="p-2 border rounded"
    >
      {TIME_ZONES.map(({ city }) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
