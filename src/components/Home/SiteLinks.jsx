import React from 'react'
import img1 from '../../images/link-soliq.jpg'
import img2 from '../../images/link-prizident.jpg'
import img3 from '../../images/link-xizmat.jpg'
import { useTranslation } from "react-i18next";


export default function SiteLinks(changeLang) {

  const { t } = useTranslation();
  const changeLanguage = (e)=>{
    changeLang(e.target.value)
    localStorage.setItem("LANGUAGE", e.target.value)
  }
  return (
    <section className='SiteLinks'>
      <div className="container">
        <h2 className='tittle'> {t("sitetittle")}</h2>
        <div className="row">

          <div className="col-md-4">
            <a target='_blank' href="https://gov.uz/ru/ssv">
              <div className="card">
                <div className="card-body">
                  <img src={img1} alt="site-links" />
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <a target='_blank' href="https://president.uz/oz">
              <div className="card">
                <div className="card-body">
                  <img src={img2} alt="site-links" />
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <a target='_blank' href="https://my.gov.uz/oz">
              <div className="card">
                <div className="card-body">
                  <img src={img3} alt="site-links" />
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
