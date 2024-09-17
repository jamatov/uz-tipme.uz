import React from 'react'
import img from '../images/logo.png'
import phone from '../images/icons/icons8-phone-96.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <nav className='Navbar'>
      <div className="container">
        <div className="nav-body">
          <img className='nav-logo' src={img} alt="logo" />

          <div>
            <ul className='nav-socials'>
              <li>
                <h6>Ishonch telefoni</h6>
                <a href="tel:+998712966975"><img className='phone-icon' src={phone} alt="phone icon" /><span>(+998 71)</span><h4>296-69-75</h4></a>
              </li>
              <li>
                <h6>Elektron pochta</h6>
                <a href="#"><span>info@tipme.uz</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="nav-bar">
        <div className="container">
          <ul>
            
            <li><NavLink to="/">Bosh sahifa</NavLink></li>
            <li><NavLink to="/markaz">Markaz</NavLink></li>
            <li><NavLink to="/xujjatlar">Me'yoriy hujjatlar</NavLink></li>
            <li><NavLink to="/faoliyat">Faoliyat</NavLink></li>
            <li><NavLink to="/tinglovchilar">Tinglovchilar</NavLink></li>
            <li><NavLink to="/yangiliklar">Yangiliklar</NavLink></li>
            <li><NavLink to="/aloqa">Aloqa</NavLink></li>
            
            {values.map((v, idx) => (
              <svg className='burger-btn' onClick={() => handleShow(v)} xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                <rect x="100" y="100" width="100" height="100" rx="20" transform="rotate(-180 100 100)" fill="#D9D9D9" fill-opacity="0.7"/>
                <path d="M73 66L27 66" stroke="black" stroke-width="5" stroke-linecap="round"/>
                <path d="M73 50L27 50" stroke="black" stroke-width="5" stroke-linecap="round"/>
                <path d="M73 34L27 34" stroke="black" stroke-width="5" stroke-linecap="round"/>
              </svg>
            ))}
            
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <img src={img} alt="logo" />
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>Modal body content</Modal.Body>
            </Modal>

          </ul>
        </div>
      </div>
    </nav>
  )
}
