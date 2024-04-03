import React from 'react'
import "./Destinations.css"
import { Data } from './Data'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const Destinations = () => {
  return (
    <section className="destinations container section" >
        <h2 className="section__title">Districts</h2>
        <span className="section__subtitle">Caressed by Arabian Sea and Western Ghats, Kerala has 14 separate districts, each famous for its own set of unique destinations and features.</span>
        <Swiper className="destination__container"
        loop={true}
        grabCursor={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        >
            {Data.map(({id,image,title,description}) => {
                return (
                    <SwiperSlide className="destination__card" key={id}>
                        <img src={image} alt="" className='destination__img'/>
                        <h1 className='destination__name'>{title}</h1>
                        <p className="destination__description">{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>

    </section>
  )
}

export default Destinations