import React from 'react'
import '../header/Header.css'
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <div>
     <section className='h_wraper'>
        <div className='flexCenter paddings innerWidth h_container'>
            <img src={logo} alt='logo' width={100}/>


            <div className='flexCenter h_menu'>
                <a href='residencies'>Residencies</a>
                <a href='value'>Our Value</a>
                <a href='contact'>Contact Us</a>
                <a href='started'>Get Started</a>
                <a href='contact'>
                    <button className='button'>Contact</button>
                </a>
            </div>
        </div>
     </section>
    </div>
  )
}

export default Header
