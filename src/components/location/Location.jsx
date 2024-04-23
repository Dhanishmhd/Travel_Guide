import React, { useEffect, useState } from "react";
import "./Location.css";
import Sidebars from "./sidebar/Sidebars";
import Navigation from "./navigation/Navigation";
import Products from "./products/Products";
import Recommendation from "./recomendation/Recommendation";
import products from "../../db/Data";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  applyFilters,
  setAttractionLocation,
  useAttractions,
} from "../../features/attractions";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from '../src/firestore';

const Location = () => {
  const { filtered_attractions } = useSelector((state) => state.attractions);
  const [searchParams, setSearchParams] = useSearchParams();
  const { filteredAttractions, applyFilters } = useAttractions()
  const filterLocation = searchParams.get("location");
  const filterMonth = searchParams.get("month");
  // const [locationss, setLocations] = useState([]);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setAttractionLocation(filterLocation));
  //   dispatch(applyFilters());
  // }, [filterLocation]);

  useEffect(() => {
    applyFilters({
      location: filterLocation ?? "",
      month: filterMonth ?? "All"
     })
  }, [filterLocation, filterMonth])

  function mapProducts() {
    console.log(filteredAttractions)
    return filteredAttractions.map(
      ({
        img,
        title,
        description,
        rating,
        district,
        month,
        touristAttraction,
        activity,
        phone,
        mail,
        location,
      }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          description={description}
          rating={rating}
          district={district}
          month={month}
          touristAttraction={touristAttraction}
          activity={Array.isArray(activity) ? activity : []}
          phone={phone}
          mail={mail}
          location={location}
        />
      )
    );
  }

  const result = mapProducts();

  return (
    <div className="location">
      <Sidebars />
      <Navigation />
      <Recommendation />
      <Products result={result} />
    </div>
  );
};

export default Location;
