import React from 'react';
import "./Input.css"

const Input = ({ handleChange, value, title, name }) => {
  return (
    <div>
      <input
        className='input'
        id={value}
        type="checkbox"
        value={value}
        name={name}
        onChange={handleChange}
      />
      <label htmlFor={value}>{title}</label>
    </div>
  );
};

export default Input;
