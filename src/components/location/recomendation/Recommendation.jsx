import React from "react";
import "./Recommendation.css";
import Buttons from "../Buttons";
import { locations } from "../../../db/location";
import { useDispatch } from "react-redux";
import { applyFilters, setAttractionLocation } from "../../../features/attractions";
import { useSearchParams } from "react-router-dom";

const Recommendation = () => {
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (e) => {
    const oldSearchParams = Object.fromEntries(searchParams)
    setSearchParams({
      ...oldSearchParams,
      location: e.target.value
    })
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
