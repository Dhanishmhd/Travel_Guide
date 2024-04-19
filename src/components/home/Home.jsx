import React, { useEffect } from 'react'
import "./Home.css"
// import ScrollDown from './ScrollDown';
import image1 from  "../../assets/images/teaplantation.jpg"
import { Link } from 'react-router-dom'
import products from "../../db/Data";
import { useDispatch, useSelector } from "react-redux";
import { setAttractions } from "../../features/attractions";

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAttractions(products));
  }, []);

  return (
    <section className="home section" id="home">
        <img className='home__image' src={image1} alt="kerala location" />
        <div className="home__text">
          <h1 className="section__title">Naturally Kerala</h1>
          <span  className="section__subtitle home__subtitle">Ecotourism Hotspots in God's Own Country</span>
          <Link to="/locations" className="button button--flex home__button">Destinations <i class='bx bx-search button__icon'></i></Link>
        </div>
    </section>
  )
}

export default Home