import React from 'react'
import img from '../images/logo.png'
import phone from '../images/icons/icons8-phone-96.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-router-dom';

import { useTranslation } from "react-i18next";

import tg from '../images/icons/telegram.svg'
import insta from '../images/icons/instagram.svg'
import fc from '../images/icons/facebook.svg'

const Navbar = ({changeLang}) => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const { t } = useTranslation();
  const changeLanguage = (e)=>{
    changeLang(e.target.value)
    localStorage.setItem("LANGUAGE", e.target.value)
  }

  return (
    <nav className='Navbar'>
      <div className="nav-head">
        <div className="container">
          <div className="d-flex">
              <ul className='socials'>
                <li><img src={tg} alt="socials" /></li>
                <li><img src={insta} alt="socials" /></li>
                <li><img src={fc} alt="socials" /></li>
              </ul>

            <select className="language" name="languages" id="languages" onChange={changeLanguage}>
              <option value="uz">O'zbekcha</option>
              <option value="oz">Ўзбекча</option>

              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="nav-body">
          <NavLink to='/'>
            <img className='nav-logo' src={img} alt="logo" />
          </NavLink>

          <div>
            <ul className='nav-socials'>
              <li>
                <h6>{t('navTel')}</h6>
                <a href="tel:+998712966975"><img className='phone-icon' src={phone} alt="phone icon" /><span>(+998)</span><h4>71-296-69-75</h4></a>
              </li>
              <li>
                <h6>{t('email')}</h6>
                <a href="#"><span>info@tipme.uz</span></a>
              </li>

                
            </ul>
          </div>
        </div>
      </div>
      <div className="nav-bar">
        <div className="container">
          <ul>
            
            <li><NavLink to="/">{t('home')}</NavLink></li>
            <li className='left-link'>
              <NavLink to="/markaz">{t("kafedra")}</NavLink>
              <div className="dropdown">
                <NavLink className="drop-link" to="/kafedra/tarix">{t('kafedra1')}</NavLink>
                <NavLink className="drop-link" to="/markaz">{t('kafedra2')}</NavLink>
                <NavLink className="drop-link" to="/markaz">{t('kafedra3')}</NavLink>
                <NavLink className="drop-link" to="/markaz">{t('kafedra4')}</NavLink>
                <NavLink className="drop-link" to="/markaz">{t('kafedra5')}</NavLink>

              </div>
            </li>

            <li className='left-link'>
              <NavLink to="/xujjatlar">{t("xujjatlar")}</NavLink>
              <div className="dropdown">
                <NavLink className="drop-link" to="/meyoriyxujjatlar/prezidentfarmonlari">{t("xujjatlar1")}</NavLink>
                <NavLink className="drop-link" to="/meyoriyxujjatlar/ssvbuyruqlari">{t("xujjatlar2")}</NavLink>
                <NavLink className="drop-link" to="/meyoriyxujjatlar/markazbuyruqlari">{t("xujjatlar3")}</NavLink>
                <NavLink className="drop-link" to="/meyoriyxujjatlar/dasturlar">{t("xujjatlar4")}</NavLink>
                <NavLink className="drop-link" to="/xujjatlar">{t("xujjatlar5")}</NavLink>
                <NavLink className="drop-link" to="/xujjatlar">{t("xujjatlar6")}</NavLink>
                <NavLink className="drop-link" to="/meyoriyxujjatlar/darsjadvali">{t("xujjatlar7")}</NavLink>
              </div>
            </li>
            <li className='left-link'>
              <NavLink to="/faoliyat">{t("faoliyat")}</NavLink>
              <div className="dropdown">
                <NavLink className="drop-link" to="/faoliyat">{t("faoliyat1")}</NavLink>
                <NavLink className="drop-link" to="/faoliyat">{t("faoliyat2")}</NavLink>
                <NavLink className="drop-link" to="/faoliyat">{t("faoliyat3")}</NavLink>
                <NavLink className="drop-link" to="/faoliyat">{t("faoliyat4")}</NavLink>
                
              </div>
            </li>
            <li className='left-link'>
              <NavLink to="/tinglovchilar">{t('tinglovchilar')}</NavLink>
              <div className="dropdown">
                <NavLink className="drop-link" to="/tinglovchilar">{t('tinglovchilar1')}</NavLink>
                <NavLink className="drop-link" to="/tinglovchilar">{t('tinglovchilar2')}</NavLink>
                
              </div>
            </li>
            <li className='left-link'>
              <NavLink to="/yangiliklar">{t("news")}</NavLink>
              <div className="dropdown">
                <NavLink className="drop-link" to="/yangiliklar">{t("news1")}</NavLink>
                <NavLink className="drop-link" to="/yangiliklar">{t("news2")}</NavLink>
              </div>
            </li>
            <li><NavLink to="/aloqa">{t("contact")}</NavLink></li>
            
            {/* {values.map((v, idx) => (
              <svg className='burger-btn' onClick={() => handleShow(v)} xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                <rect x="100" y="100" width="100" height="100" rx="20" transform="rotate(-180 100 100)" fill="#D9D9D9" fill-opacity="0.7"/>
                <path d="M73 66L27 66" stroke="black" stroke-width="5" stroke-linecap="round"/>
                <path d="M73 50L27 50" stroke="black" stroke-width="5" stroke-linecap="round"/>
                <path d="M73 34L27 34" stroke="black" stroke-width="5" stroke-linecap="round"/>
              </svg>
            ))} */}
            
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <img src={img} alt="logo" />
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  
                  <li><NavLink values onClick={() => handleShow()} to="/">{t('home')}</NavLink></li>

              </Modal.Body>
            </Modal>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;