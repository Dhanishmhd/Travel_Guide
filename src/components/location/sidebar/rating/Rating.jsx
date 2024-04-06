import React from 'react'
import "./Rating.css"
import Input from '../../Input'

const Rating = ({handleChange}) => {
  
  return (
    <div>
      <h2 className='sidebar-title'>Rating</h2>
      <div className='sidebar-items'>
        {/* <label htmlFor="" className="sidebar-label__container">
          <input onChange={ handleChange }type="radio" value="" name='test2'/>
          <span className="checkmark"></span>All
        </label> */}
        <Input
          handleChange={handleChange}
          value={5}
          title="4-5"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={4}
          title="3-4"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={3}
          title="2-3"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={2}
          title="1-2"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={1}
          title="0-1"
          name="test2"
        />
      </div>
    </div>
  )
}

export default Rating