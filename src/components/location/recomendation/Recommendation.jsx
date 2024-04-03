import React from "react";
import "./Recommendation.css";
import Buttons from "../../Buttons";

const Recommendation = () => {
  const handleClick = () => {};
  return (
    <div className="location__recommendation">
      <div className="recommended__flex">
        <Buttons onClickHandler={handleClick} value="" title="All Locations" />
        <Buttons
          onClickHandler={handleClick}
          value="thiruvananthapuram"
          title="Thiruvananthapuram"
        />
        <Buttons onClickHandler={handleClick} value="kollam" title="Kollam" />
        <Buttons
          onClickHandler={handleClick}
          value="pathanamthitta"
          title="Pathanamthitta"
        />
        <Buttons
          onClickHandler={handleClick}
          value="alappuzha"
          title="Alappuzha"
        />
        <Buttons
          onClickHandler={handleClick}
          value="kottayam"
          title="Kottayam"
        />
        <Buttons onClickHandler={handleClick} value="idukki" title="Idukki" />
        <Buttons
          onClickHandler={handleClick}
          value="ernakulam"
          title="Ernakulam"
        />
        <Buttons
          onClickHandler={handleClick}
          value="thrissur"
          title="Thrissur"
        />
        <Buttons
          onClickHandler={handleClick}
          value="palakkad"
          title="Palakkad"
        />
        <Buttons
          onClickHandler={handleClick}
          value="malappuram"
          title="Malappuram"
        />
        <Buttons
          onClickHandler={handleClick}
          value="kozhikode"
          title="Kozhikode"
        />
        <Buttons onClickHandler={handleClick} value="wayanad" title="Wayanad" />
        <Buttons onClickHandler={handleClick} value="kannur" title="Kannur" />
        <Buttons
          onClickHandler={handleClick}
          value="kasaragod"
          title="Kasaragod"
        />
      </div>
    </div>
  );
};

export default Recommendation;
