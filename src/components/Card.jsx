import React, { useState } from "react";

const Card = ({
  img,
  title,
  description,
  rating,
  district,
  month,
  touristAttraction,
  activity,
}) => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i class="bx bxs-star"></i>);
    }
    return stars;
  };
  return (
    <div className="card__content">
      <div onClick={() => toggleTab(1)} className="card">
        <img className="card__img" src={img} alt={title} />
        <div className="card__details">
          <h3 className="card__title">{title}</h3>
          <p className="card__subtitle">{description}</p>
        </div>
      </div>

      <div
        className={
          toggleState === 1 ? "card__modal active-modal" : "card__modal"
        }
      >
        <div className="card__modal-content">
          <img className="card__modal-img" src={img} alt={title} />
          <i
            onClick={() => toggleTab(0)}
            className="bx bx-x card__modal-close"
          ></i>
          <h2 className="card__modal-title">{title}</h2>
          <p className="card__modal-description">{description}</p>
          <div className="card__modal-rd">
            <h4 className="card__modal-rating">Rating:&nbsp;</h4>
            {renderStars()}
            <h4 className="card__modal-district">District:&nbsp; </h4>
            {district}
            <h4 className="card__modal-district">Best month to visit:&nbsp;</h4>
            {month}
            <h4 className="card__modal-district">
              type of tourist attraction:&nbsp;
            </h4>
            {touristAttraction}
          </div>
          {activity && activity.length > 0 && (
            <div className="card__modal-activities">
              <h3>Activities:</h3>
              <ul>
                {activity.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
