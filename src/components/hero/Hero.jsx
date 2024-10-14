import React from 'react'
import '../hero/Hero.css'
import hero from '../../images/hero-image.png'

const Hero = () => {
  return (
    <section className='hero_wraper'>
        <div className='flexCenter paddings innerWidth hero-container'>
        
            <div className='flexColStart hreo_left'>
                <div className='hero_title'>
                    <div className='orange_cricle'></div>
                    <h1>Discover <br/>Most Suitable <br/>Property</h1>
                </div>
                <div className='flexColStart hero_decs'>
                    <span>Find a variety of properties that suit you very easilty</span>
                    <span>Forget all difficulties in finding a residence for you</span>
                </div>
                <div className='flexCenter searsh_bar'>
                    <i class="fa-solid fa-location-dot"></i>
                    <input type='text'/>
                    <button className='button'>Searsh</button>
                </div>
            </div>
            <div className='flexCenter hreo_right'>
                <div className='img_container'>
                    <img src={hero} alt='hero'/>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Hero
