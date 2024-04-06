import React, { useEffect, useState } from "react";
import "./Location.css";
import Sidebars from "./sidebar/Sidebars";
import Navigation from "./navigation/Navigation";
import Products from "./products/Products";
import Recommendation from "./recomendation/Recommendation";
import products from "../../db/Data";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { setAttractions } from "../../features/attractions";

const Location = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const dispatch = useDispatch();
  const { filtered_attractions } = useSelector((state) => state.attractions);

  useEffect(() => {
    dispatch(setAttractions(products));
  }, []);

  function mapProducts() {
    return filtered_attractions?.map(
      ({
        img,
        title,
        description,
        rating,
        district,
        month,
        touristAttraction,
        activity,
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
        />
      )
    );
  }

  const result = mapProducts(products);

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
