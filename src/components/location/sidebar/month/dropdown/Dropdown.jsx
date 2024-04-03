import React, { useState } from 'react'
import "./Dropdown.css"
import Input from '../../../../Input';

const Dropdown = ({handleChange,selected,setSelected}) => {
    const [isActive,setIsActive] =useState(false)
    const options = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return ( 
    <div className="dropdown">
          <div className="dropdown__btn" onClick={(e) => {
            setIsActive(!isActive)
          }}>{selected}
            <i class='bx bxs-down-arrow'></i>
          </div>
          {isActive&&(
          <div className="dropdown__content">
            {options.map(option => (
                <div onClick={e => {
                    setSelected(option)
                    setIsActive(false)
                }} 
                className="dropdown__item">
                      <Input
                      handleChange={handleChange}
                      value={option}
                      title={option}
                      name="test2"
                    />
                </div>
            ))}
        </div>
            )}
    </div>
  )
}

export default Dropdown