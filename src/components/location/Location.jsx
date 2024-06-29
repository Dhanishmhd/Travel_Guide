import React, { useEffect } from "react";
import "./Location.css";
import Sidebars from "./sidebar/Sidebars";
import Navigation from "./navigation/Navigation";
import Products from "./products/Products";
import Recommendation from "./recomendation/Recommendation";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import { useAttractions } from "../../features/attractions";
import { getLocations } from "../../lib/getAttractions";


const Location = () => {
  const [searchParams] = useSearchParams();
  const { filteredAttractions, applyFilters, setIsLoaded, setAttractions, isLoaded } = useAttractions();
  const filterLocation = searchParams.get("location");
  const filterMonth = searchParams.get("month");
  const filterRating = searchParams.get("ratings");
  const filterAttractionType = searchParams.get("attractionType");
  const filtersearchname = searchParams.get("searchname");

  useEffect(() => {
    setIsLoaded(false)
    getLocations().then(data => {
      setAttractions(data);
      applyFilters({
        location: filterLocation ?? "",
        month: filterMonth ?? "All",
        rating: filterRating?.split(",").filter((s) => s !== "") ?? [],
        attractionType:
          filterAttractionType?.split(",").filter((s) => s !== "") ?? [],
        searchname: filtersearchname ?? "",
      });
      setIsLoaded(true)
    })
  }, [
    filterLocation,
    filterMonth,
    filterRating,
    filterAttractionType,
    filtersearchname,
    applyFilters,
    setAttractions,
    setIsLoaded
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
      {isLoaded ? (<Products result={result} />) : (<>
        <div style={{ width: '100vw', height: '100vh', background: "#fff", position: "absolute", top: "0", left: '0', zIndex: 100, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src="/svg/Loader.svg" alt="loader" />
        </div>
      </>)}
    </div>
  );
};

export default Location;
