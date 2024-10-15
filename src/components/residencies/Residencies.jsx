// import React from 'react'
// import './Residencies.css'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css'
// import data from '../../utlis/slider.json'

// const Residencies = () => {
//   return (
//     <section className='r-wraper'>
//         <div className='paddings innerWidth r-container'>
//             <div className='flexColStart r-head'>
//                 <span className='orangeText'>Best Choices</span>
//                 <span className='primaryText'>Popular Residencies</span>
//             </div>

//             <Swiper>
//                 {
//                     data.map((card, i)=> (
//                         <SwiperSlide key={i}>
//                             <div className='r-card'>
//                                 <img src={card.image} alt='home'/>

//                                 <span className='secoundryText r-price'>
//                                     <span style={{ color: "orange" }}>$</span>
//                                     <span>{card.price}</span>

//                                     <span className='primaryText'>{card.name}</span>
//                                     <span className='secoundryText'>{card.detail}</span>
//                                 </span>
//                             </div>
//                         </SwiperSlide>
//                     ))
//                 }
//             </Swiper>
//         </div>
//     </section>
//   )
// }

// export default Residencies











import React from 'react';
import './Residencies.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import data from '../../utlis/slider.json';
import {sliderSettings} from '../../utlis/common'

const Residencies = () => {
  return (
    <section className='r-wrapper'>
      <div className='paddings innerWidth r-container'>
        <div className='flexColStart r-head'>
          <span className='orangeText'>Best Choices</span>
          <span className='primaryText'>Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
            <SliderButtons/>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className='r-card'>
                <img src={card.image} alt='home' className='r-card-image' />
                <div className='r-card-content'>
                  <span className='secondaryText r-price'>
                    <span style={{ color: "orange" }}>$</span>
                    <span>{card.price}</span>
                  </span>
                  <span className='primaryText'>{card.name}</span>
                  <span className='secondaryText'>{card.detail}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;


const SliderButtons = () 