import "./Rating.css";
import Input from "../../Input";
import { attractionRating } from "../../../../db/rating";
import { useSearchParams } from "react-router-dom";

const Rating = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamRatings =
    searchParams
      .get("ratings")
      ?.split(",")
      .filter((s) => s !== "") ?? [];

  console.log(searchParamRatings);

  const handleChange = (e, index) => {
    const checked = e.target.checked;
    let ratings = searchParamRatings;

    if (checked && !ratings.includes(index.toString())) {
      ratings.push(index.toString());
    } else if (!checked && ratings.includes(index.toString())) {
      ratings = ratings.filter((rating) => rating !== index.toString());
    }

    const prevSearchParams = Object.fromEntries(searchParams);
    setSearchParams({
      ...prevSearchParams,
      ratings: ratings.join(","),
    });
  };

  return (
    <div>
      <h2 className="sidebar-title">Rating</h2>
      <div className="sidebar-items">
        {attractionRating.map((attraction, index) => (
          <Input
            key={index}
            handleChange={(e) => handleChange(e, Number(attraction.value))}
            checked={searchParamRatings.includes(attraction.value.toString())}
            value={attraction.value}
            title={attraction.title}
            name={attraction.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Rating;
