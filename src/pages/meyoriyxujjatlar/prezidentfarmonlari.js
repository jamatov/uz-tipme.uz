import React from 'react'
import pdf from '../../images/icons/pdf-icon.svg'
import { useTranslation } from "react-i18next";


export default function Prezidentfarmonlari(changeLang) {

  const { t } = useTranslation();

  const changeLanguage = (e) => {
    changeLang(e.target.value);
    localStorage.setItem("LANGUAGE", e.target.value);
  };
  return (
    <div className='dasturlar'>
      <div className="container">
        <h2 className='tittle'>{t("prezidentTittle")}</h2>

        <div className="row">
          
          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={pdf} alt="pdf-icon" />
                  <h4></h4> 
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/prezident-farmonlari1.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/prezident-farmonlari1.pdf" download="">
                    <button className='download'>{t("darssave")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={pdf} alt="pdf-icon" />
                  <h4></h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/prezident-farmonlari2.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/prezident-farmonlari2.pdf" download="">
                    <button className='download'>{t("darssave")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={pdf} alt="pdf-icon" />
                  <h4></h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/prezident-farmonlari3.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/prezident-farmonlari3.pdf" download="">
                    <button className='download'>{t("darssave")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={pdf} alt="pdf-icon" />
                  <h4></h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/prezident-farmonlari4.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/prezident-farmonlari4.pdf" download="">
                    <button className='download'>{t("darssave")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={pdf} alt="pdf-icon" />
                  <h4></h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/prezident-farmonlari5.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/prezident-farmonlari5.pdf" download="">
                    <button className='download'>{t("darssave")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={pdf} alt="pdf-icon" />
                  <h4></h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/prezident-farmonlari6.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/prezident-farmonlari6.pdf" download="">
                    <button className='download'>{t("darssave")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}
