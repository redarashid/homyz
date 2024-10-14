import React from 'react'
import './Companies.css'
import logo1 from '../../images/prologis.png'
import logo2 from '../../images/tower.png'
import logo3 from '../../images/equinix.png'
import logo4 from '../../images/realty.png'

const Companies = () => {
  return (
    <div>
      <section className='c-wrapper'>
        <div className='innerWidth paddings flexCenter c-container'>
            <img src={logo1} alt='img'/>
            <img src={logo2} alt='img'/>
            <img src={logo3} alt='img'/>
            <img src={logo4} alt='img'/>
        </div>
      </section>
    </div>
  )
}

export default Companies
