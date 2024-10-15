import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

const ContactUs = () => {
  return (
    <div>
      <section className='c-wrapper'>
        <div className='paddings innerWidth flexCenter c-container'>

          <div className='flexColStart c-left'>
              <span className='orangeText'>Our Contact Us</span>
              <span className='primaryText'>Easy to contact us</span>
              <span className='secondaryText'>We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</span>

              <div className='flexColStart contactModes'>
                         
                        <div className='flexStart row'>

                        <div className='flexColCenter mode'>
                        <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <MdCall size={25}/>
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'>Call</span>
                                <span className='secoundaryText'>021 123 145 14</span>
                            </div>
                        </div>
                        <div className='flexCenter button'>Call Now</div>
                        </div>
                        <div className='flexColCenter mode'>
                        <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'>Chate</span>
                                <span className='secoundaryText'>021 123 145 14</span>
                            </div>
                        </div>
                        <div className='flexCenter button'>Chate Now</div>
                        </div>
                        </div>
                        
                        <div className='flexStart row'>

                        <div className='flexColCenter mode'>
                        <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <HiChatBubbleBottomCenter size={25}/>
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'>Video Call</span>
                                <span className='secoundaryText'>021 123 145 14</span>
                            </div>
                        </div>
                        <div className='flexCenter button'>Video Call Now</div>
                        </div>
                        <div className='flexColCenter mode'>
                        <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'>Message</span>
                                <span className='secoundaryText'>021 123 145 14</span>
                            </div>
                        </div>
                        <div className='flexCenter button'>Message Now</div>
                        </div>
                        </div>


                    

              </div>
          </div>

          <div className='c-right'>
            <div className='image-container'>
                <img src='../../images/contact.jpg' alt='contact'/>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default ContactUs
