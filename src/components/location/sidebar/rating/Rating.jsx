import React from 'react'
import "./Rating.css"
import Input from '../../Input'
import { attractionRating } from "../../../../db/rating";
import { useDispatch, useSelector } from "react-redux";
import { setAttractionRating, applyFilters } from "../../../../features/attractions";

const Rating = () => {
  const dispatch = useDispatch();
  const { based } = useSelector(state => state.attractions)

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(setAttractionRating(value));
    dispatch(applyFilters())
  };

  console.log(based)
  
  return (
    <div>
      <h2 className='sidebar-title'>Rating</h2>
      <div className='sidebar-items'>
      {attractionRating.map((attraction, index) => (
          <Input
            key={index}
            handleChange={handleChange}
            value={attraction.value}
            title={attraction.title}
            name={attraction.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Rating