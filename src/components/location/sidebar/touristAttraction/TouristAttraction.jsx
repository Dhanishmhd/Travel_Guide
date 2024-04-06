import React from "react";
import "./TouristAttraction.css";
import Input from "../../../Input";
import { attractionCategories } from "../../../../db/attractions";
import { useDispatch, useSelector } from "react-redux";
import { setAttractionType, applyFilters } from "../../../../features/attractions";

const TouristAttraction = () => {
  const dispatch = useDispatch();
  const { based } = useSelector(state => state.attractions)

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(setAttractionType(value));
    dispatch(applyFilters())
  };

  console.log(based)

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
