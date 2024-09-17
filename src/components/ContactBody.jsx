import React from 'react'
import icon from '../images/icons/location.svg'
import phone from '../images/icons/phone.svg'
import email from '../images/icons/mail.svg'
import watch from '../images/icons/watch.svg'
import printer from '../images/icons/printer.svg'
import website from '../images/icons/website.svg'

export default function ContactBody() {
  return (
    <section className='ContactBody'>
      <div className="container">
        <h2 className='tittle'>Biz bilan bog'lanish</h2>
        <div className="row">
          <div className="col-md-6">
            <h3>Manzil:</h3>
            <div className='social-info mb-3'>
              <img className='icons' src={icon} alt="location" /><p>Toshkent shahar. M.Ulug’bek tumani. Parkent ko’chasi 51</p>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <h3>Aloqa raqami:</h3>
                  <a href="tel:+998712966975">
                    <div className="social-info mb-3">
                      <img src={phone} className='icons' alt="phone" /><p>(+998 71)296-69-75</p>
                    </div>
                  </a>

                  <h3>Email:</h3>
                  <div className="social-info mb-3">
                      <img src={email} className='icons' alt="phone" /><p>info@tipme.uz</p>
                  </div>

                  <h3>Ish tartibi:</h3>
                  <div className="social-info mb-3">
                      <img src={watch} className='icons' alt="phone" /><p>08:30 - 17:00</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card">
                  

                  <h3>Vebsayt:</h3>
                  <div className="social-info mb-3">
                    <img src={website } className='icons' alt="phone" /><p>https://uzd-tipme.uz</p>
                  </div>

                  <h3>Tushlik:</h3>
                  <div className="social-info mb-3">
                    <img src={watch } className='icons' alt="phone" /><p>12:00 - 13:00</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="col-md-6 ">
            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1932.764956494705!2d69.34543539597519!3d41.296972760046145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b698a8600e3%3A0x6de0dfe5784471d1!2sMedicana.uz!5e0!3m2!1sru!2s!4v1726407320942!5m2!1sru!2s" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
