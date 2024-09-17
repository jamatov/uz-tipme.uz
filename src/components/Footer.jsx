import React from 'react'
import logo from '../images/logo.png'
import location from '../images/icons/location.svg'
import time from '../images/icons/watch.svg'
import tg from '../images/icons/telegram.svg'
import insta from '../images/icons/instagram.svg'
import fc from '../images/icons/facebook.svg'

export default function Footer() {
  return (
    <footer className='Footer'>
      <div className="container">
        <div className="row">
            <div className="col-md-4">
              <img className='footer-logo mb-4' src={logo} alt="logo" />

              <h3 className='mb-3'>Ijtimoiy tarmoqlar:</h3>
              <ul className='socials'>
                <li><img src={tg} alt="socials" /></li>
                <li><img src={insta} alt="socials" /></li>
                <li><img src={fc} alt="socials" /></li>
              </ul>
            </div>
            
            <div className="col-md-4">
                
            </div>
            
            <div className="col-md-4">
              <h3 className='mb-3'>Manzil:</h3>
              <div className="d-flex mb-3">
                <img className='icons' src={location} alt="location" />
                <p>Aviasozlar ko'chasi 29, Yashnobod tumani, Toshkent</p>
              </div>

              <h3 className='mb-3'>Ish vaqti:</h3>
              <div className="d-flex mb-3">
                <img className='icons' src={time} alt="time" />
                <p>Ish tartibi: <b>Dushanba - Juma, 8:30 - 14:30</b> <br /> Dam olish kunlari: <b>Shanba, Yakshanba</b></p> 
              </div>
            </div>
            
        </div>
      </div>
    </footer>
  )
}
