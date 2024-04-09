import React, { useState } from 'react';
import './Dropdown.css';
import { useDispatch, useSelector } from 'react-redux';
import { setAttractionMonth, applyFilters } from '../../../../../features/attractions';

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch()
  const { month } = useSelector(state => state.attractions.based);
  const options = [
    'All',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  

  const handleChange = (option) => {
    setIsActive(false);
    if (option === 'All') {
      dispatch(setAttractionMonth('All'));
    } else {
      dispatch(setAttractionMonth(option));
    }
    dispatch(applyFilters());
  };

  return (
    <div className='dropdown'>
      <div
        className='dropdown__btn'
        onClick={() => setIsActive(!isActive)}
        role='button'
        aria-expanded={isActive}
      >
        {month}
        <i className='bx bxs-down-arrow'></i>
      </div>
      {isActive && (
        <div className='dropdown__content'>
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleChange(option)}
              className='dropdown__item'
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
