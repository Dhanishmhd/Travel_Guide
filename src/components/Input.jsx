import React from 'react';

const Input = ({ handleChange, value, title, name }) => {
  return (
    <div>
      <input
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
