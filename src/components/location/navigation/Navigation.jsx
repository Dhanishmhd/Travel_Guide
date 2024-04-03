import React, { useState, useEffect } from 'react';
import "./Navigation.css"
import { useDispatch, useSelector } from 'react-redux'
import { searchForLocation } from '../../../features/attractions'

const Navigation = () => {
  const dispatch = useDispatch();
  const { location } = useSelector(state => state.attractions.based);
  const [inputValue, setInputValue] = useState(location);

  // Debounce search term so it only updates after user has stopped typing for 500ms
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(searchForLocation(inputValue));
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [inputValue, dispatch]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="location__nav">
      <h2 className="location__title">Destinations</h2>
      <div className="location__search">
        <i className='bx bx-search location-search__icon'></i>
        <input onChange={handleChange} type="text" className="location-search__input" placeholder="Search locations..." value={inputValue}/>
      </div>
    </div>
  );
};

export default Navigation;
