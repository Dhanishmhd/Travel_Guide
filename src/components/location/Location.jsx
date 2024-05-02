import React, { useEffect } from "react";
import "./Location.css";
import Sidebars from "./sidebar/Sidebars";
import Navigation from "./navigation/Navigation";
import Products from "./products/Products";
import Recommendation from "./recomendation/Recommendation";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import { useAttractions } from "../../features/attractions";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from '../src/firestore';

const Location = () => {
  const [searchParams] = useSearchParams();
  const { filteredAttractions, applyFilters } = useAttractions();
  const filterLocation = searchParams.get("location");
  const filterMonth = searchParams.get("month");
  const filterRating = searchParams.get("ratings");
  const filterAttractionType = searchParams.get("attractionType");
  const filtersearchname = searchParams.get("searchname");

  useEffect(() => {
    applyFilters({
      location: filterLocation ?? "",
      month: filterMonth ?? "All",
      rating: filterRating?.split(",").filter((s) => s !== "") ?? [],
      attractionType:
        filterAttractionType?.split(",").filter((s) => s !== "") ?? [],
      searchname: filtersearchname ?? "",
    });
  }, [
    filterLocation,
    filterMonth,
    filterRating,
    filterAttractionType,
    filtersearchname,
    applyFilters,
  ]);

  function mapProducts() {
    console.log(filteredAttractions);
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
