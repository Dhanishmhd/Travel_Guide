import React from "react";
import "./Recommendation.css";
import Buttons from "../Buttons";
import { locations } from "../../../db/location";
import { useDispatch } from "react-redux";
import { applyFilters, setAttractionLocation } from "../../../features/attractions";

const Recommendation = () => {
  const dispatch = useDispatch()

  const handleClick = (e) => {
    dispatch(setAttractionLocation(e.target.value))
    dispatch(applyFilters())
  };

  return (
    <div className="location__recommendation">
      <div className="recommended__flex">
        {locations.map(location => (
          <Buttons onClick={handleClick} value={location.value} title={location.title} />
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
