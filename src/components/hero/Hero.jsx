import React from 'react'
import '../hero/Hero.css'
import hero from '../../images/hero-image.png'
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <section id='Hero' className='hero_wraper'>
        <div className='flexCenter paddings innerWidth hero-container'>
        
            <div className='flexColStart hreo_left'>
                <div className='hero_title'>
                    <div className='orange_cricle'></div>
                    <h1>Discover <br/>Most Suitable <br/>Property</h1>
                </div>

                <div className='flexColStart hero_decs'>
                    <span className='secoundryText'>Find a variety of properties that suit you very easilty</span>
                    <span className='secoundryText'>Forget all difficulties in finding a residence for you</span>
                </div>

                <div className='flexCenter searsh_bar'>
                    <i class="fa-solid fa-location-dot"></i>
                    <input type='text'/>
                    <button className='button'>Searsh</button>
                </div>

                <div className='flexCenter stats'>
                    <div className='flexColCenter stat'>
                        <span>
                            <CountUp start={8800} end={9000} duration={4} />
                            <span>+</span>
                        </span>
                        <span className='secoundryText'>Premium Product</span>
                    </div>

                    <div className='flexColCenter stat'>
                        <span>
                            <CountUp start={1900} end={2000} duration={4} />
                            <span>+</span>
                        </span>
                        <span className='secoundryText'>Happy Customer</span>
                    </div>

                    <div className='flexColCenter stat'>
                        <span>
                            <CountUp end={28} duration={4} />
                            <span>+</span>
                        </span>
                        <span className='secoundryText'>Awards Winning</span>
                    </div>
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
