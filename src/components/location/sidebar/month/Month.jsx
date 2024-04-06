import React from 'react'
import "./Month.css"
import Dropdown from './dropdown/Dropdown'


const Month = () => {

  return (
    <div className='ml'>
      <h2 className="sidebar-title month-title">Month You Visit</h2>
      <Dropdown/>
    </div>

  )
}

export default Month