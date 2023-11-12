import { useState } from "react";
import React from "react";
import "tailwindcss/tailwind.css";


const DropDown = ({handleChange}) => {
  const [tracks, setTracks] = useState("tracks");

  const options = [
    { label: "Generic Hardware", value: "hardware" },

    { label: "Generic Software", value: "software" },

    { label: "Health Care", value: "healthcare" },

    { label: "FinTech", value: "fintech" },
  ];

  const handleTrackChange = (event) => {
    setTracks(event.target.value);
  };

  return (
    <div className="mx-[20px] mt-[20px]">
      <label className="text-[28px]">
        Select Track
        <select
          className="text-gray-700 text-[28px] mx-[10px] rounded-md"
          onChange={handleTrackChange}
          
        >
          {options.map((option) => (
            // eslint-disable-next-line react/jsx-key
            <option value={option.value} 
              
            onChange={handleChange}>{option.label}
          
            
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default DropDown;