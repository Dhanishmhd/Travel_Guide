import React, { useState, useEffect } from 'react';
import "./Navigation.css"
import { useSearchParams } from "react-router-dom";

const Navigation = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchname = searchParams.get("searchname") ?? "";
  const [inputValue, setInputValue] = useState(searchname);

  // Debounce search term so it only updates after user has stopped typing for 500ms
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const oldSearchParams = Object.fromEntries(searchParams.entries());
      setSearchParams({
        ...oldSearchParams,
        searchname: inputValue,
      });
    }, 500);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="location__nav">
      <h2 className="location__title">Destinations</h2>
      <div className="location__search">
        <i className="bx bx-search location-search__icon"></i>
        <input
          onChange={handleChange}
          type="text"
          className="location-search__input"
          placeholder="Search locations..."
          value={inputValue}
        />
      </div>
    </div>
  );
};

export default Navigation;
