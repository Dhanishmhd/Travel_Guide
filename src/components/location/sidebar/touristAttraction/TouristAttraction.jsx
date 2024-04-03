import React from "react";
import "./TouristAttraction.css";
import Input from "../../../Input";
import { attractionCategories } from "../../../../db/attractions";

const TouristAttraction = ({ handleChange }) => {
  console.log(attractionCategories);

  return (
    <div>
      <h2 className="sidebar-title">Tourist Attractions</h2>
      <div className="sidebar-items">
        {attractionCategories.map((attraction, index) => (
          <Input
            key={index}
            handleChange={handleChange}
            value={attraction.value}
            title={attraction.title}
            name={attraction.name}
          />
        ))}
      </div>
    </div>
  );
};

export default TouristAttraction;
