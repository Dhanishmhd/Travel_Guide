import React, { useState } from 'react'
import "./Month.css"
import Dropdown from './dropdown/Dropdown'


const Month = ({handleChange}) => {
  const [selected,setSelected] = useState("Choose Month")
  return (
    <div className='ml'>
      <h2 className="sidebar-title month-title">Month</h2>
      <Dropdown handleChange={handleChange} selected={selected} setSelected={setSelected}/>
    </div>

  )
}

export default Month