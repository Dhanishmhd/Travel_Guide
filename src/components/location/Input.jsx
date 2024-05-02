import React from 'react';
import "./Input.css"

const Input = ({ handleChange, value, title, name, checked }) => {

  return (
    <div>
      <input
        className="input"
        id={value}
        type="checkbox"
        checked={checked}
        name={name}
        onChange={handleChange}
      />
      <label htmlFor={value}>{title}</label>
    </div>
  );
};

export default Input;
