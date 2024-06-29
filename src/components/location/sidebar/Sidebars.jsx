import "./Sidebars.css";
import TouristAttraction from "./touristAttraction/TouristAttraction";
import Month from "./month/Month";
import Rating from "./rating/Rating";
import { Link } from "react-router-dom";

const Sidebars = () => {
  return (
    <div className="sidebar">
      <div className="logo__container">
        <h1>
          <i class="bx bxs-filter-alt filter"></i>
        
        </h1>
      </div>
      <TouristAttraction />
      <Month />
      <Rating />
      <Link to="/locations" className="button  home__button">Reset <i class='bx bx-reset'></i></Link>
    </div>
  );
};

export default Sidebars;
