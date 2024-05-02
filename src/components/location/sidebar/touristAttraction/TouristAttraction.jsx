import React from "react";
import "./TouristAttraction.css";
import Input from "../../Input";
import { attractionCategories } from "../../../../db/attractions";
import { useSearchParams } from "react-router-dom";

const TouristAttraction = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const attractionType =
    searchParams
      .get("attractionType")
      ?.split(",")
      .filter((s) => s !== "") || [];

  const handleChange = (e, value) => {
    const checked = e.target.checked;

    let newAttractionType = attractionType;

    if (checked && !newAttractionType.includes(value)) {
      attractionType.push(value);
    } else if (!checked && newAttractionType.includes(value)) {
      newAttractionType = newAttractionType.filter((type) => type !== value);
    }

    const oldSearchParams = Object.fromEntries(searchParams.entries());

    setSearchParams({
      ...oldSearchParams,
      attractionType: newAttractionType.join(","),
    });
  };

  return (
    <div>
      <h2 className="sidebar-title">Tourist Attractions</h2>
      <div className="sidebar-items">
        {attractionCategories.map((attraction, index) => (
          <Input
            key={index}
            handleChange={(e) => handleChange(e, attraction.value)}
            checked={attractionType.includes(attraction.value)}
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
