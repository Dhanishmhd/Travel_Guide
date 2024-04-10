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
  phone,
  mail,
  location
}) => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i className="bx bxs-star" key={i}></i>);
    }
    return stars;
  };

  return (
    <div className="card__content">
      <div onClick={() => toggleTab(1)} className="card">
        <img className="card__img" src={img} alt={title} />
        <div className="card__details">
          <h3 className="card__title">{title}</h3>
          <p className="card__subtitle" >
            {description}
          </p>
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
            <h4 className="card__modal-district">Best months to visit:&nbsp;</h4>
            {Array.isArray(month) ? month.join(',  ') : month}
            <h4 className="card__modal-district">
              Type of tourist attraction:&nbsp;
            </h4>
            {touristAttraction}
          </div>
          <div className="card__modal-contact">
            <h4 className="card__modal-elements">Phone No:</h4>
            <p>{phone}</p>
            <h4 className="card__modal-elements">Email:</h4>
            <p>{mail}</p>
          </div>
          {activity && activity.length > 0 && (
            <div className="card__modal-activities">
              <h3 className="title">Activities:</h3>
              <ul>
                {activity.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="card__modal-location">
            <a className="location" href={location}>
              <h4 className="card__modal-district">See Location<i className='bx bx-right-arrow-alt arrow'></i></h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
