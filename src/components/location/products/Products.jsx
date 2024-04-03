import React from 'react'
import "./Products.css"


const Products = ({result}) => {
  
  return (
    <>
      <div className="card__container">{result}</div>
    </>
  )
}

export default Products