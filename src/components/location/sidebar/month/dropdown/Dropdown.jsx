import React, { useState } from 'react';
import './Dropdown.css';
import { useAttractions } from "../../../../../features/attractions";
import { useSearchParams } from 'react-router-dom';

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const { filters } = useAttractions()
  const [searchParams, setSearchParams] = useSearchParams()
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
    const oldSearchParams = Object.fromEntries(searchParams)
    setSearchParams({
      ...oldSearchParams, 
      month: option
    })

    setIsActive(false)

  };

  console.log(filters)

  return (
    <div className='dropdown'>
      <div
        className='dropdown__btn'
        onClick={() => setIsActive(!isActive)}
        role='button'
        aria-expanded={isActive}
      >
        {filters.month}
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
