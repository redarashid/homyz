import React from 'react'
import './Residencies.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import data from '../../utlis/slider.json'

const Residencies = () => {
  return (
    <section className='r-wraper'>
        <div className='paddings innerWidth r-container'>
            <div className='flexColStart r-head'>
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>

            <Swiper>
                {
                    data.map((card, i)=> (
                        <SwiperSlide key={i}>
                            <div className='r-card'>
                                <img src={card.image} alt='home'/>

                                <span className='secoundryText r-price'>
                                    <span style={{ color: "orange" }}>$</span>
                                    <span>{card.price}</span>

                                    <span className='primaryText'>{card.name}</span>
                                    <span className='secoundryText'>{card.detail}</span>
                                </span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies
