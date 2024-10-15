import React from 'react'
import './Information.css'

const Information = () => {
  return (
    <section id='Information' class="f-wrapper">
        <div class="paddings innerWidth flexCenter f-container">
            <div className='flexColStart f-left'>
                <img src='../../images/logo2.png' alt='logo' width={120}/>
                <span className='secondaryText'>Our vision is to make all peoplethe best place to live for them.</span>
            </div>

            <div className='flexColStart f-right'>
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>145 New York, FL 5467, USA</span>
                <div className='flexCenter f-menu'>
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Information
