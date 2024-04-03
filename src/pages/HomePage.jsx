import React from 'react'
import Header from '../components/header/Header'
import Home from '../components/home/Home'
import Destinations from '../components/destinations/Destinations'
import Contacts from '../components/contacts/Contacts'
import Footer from '../components/footer/Footer'

const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
      <Destinations/>
      <Contacts/>
      <Footer/>
    </>
  )
}

export default HomePage