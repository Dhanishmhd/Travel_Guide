import React, { useState } from 'react'
import "./Location.css"
import Sidebars from './sidebar/Sidebars'
import Navigation from './navigation/Navigation'
import Products from './products/Products'
import Recommendation from './recomendation/Recommendation'
import products from '../../db/Data'
import Card from '../Card'

const Location = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({district,touristAttraction,month,rating,title}) =>
          district === selected ||
          touristAttraction === selected ||
          month === selected ||
          rating === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({img,title,description,rating,district,month,touristAttraction,activity}) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          description={description}
          rating={rating}
          district={district}
          month={month}
          touristAttraction={touristAttraction}
          activity={Array.isArray(activity) ? activity : []}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div className='location'>
      <Sidebars handleChange={handleChange}/>
      <Navigation query={query} handleInputChange={handleInputChange}/>
      <Recommendation handleClick={handleClick}/>
      <Products result={result}/>
    </div>
  )
}

export default Location