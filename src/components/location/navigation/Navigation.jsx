import React from 'react'
import "./Navigation.css"

const Navigation = ( {handleInputChange, query} ) => {
  return (
    <div className="location__nav">
        <h2 className="location__title">Destinations</h2>
        <div className="location__search">
          <i class='bx bx-search location-search__icon '></i>
          <input onChange={handleInputChange} type="text"  className="location-search__input" placeholder="Search locations..." value={query}/>
        </div>
      </div>
  )
}

export default Navigation