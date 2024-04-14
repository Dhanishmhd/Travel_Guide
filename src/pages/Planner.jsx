import React from 'react'

import Header from '../components/header/Header'
import Planing from '../components/planing/Planing'

const Planner = () => {
  return (
    <div>
      <Header/>
      <section className="planner section">
        <Planing/>
      </section>
    </div>
  )
}

export default Planner