import React from 'react'
import pdf from '../../images/icons/pdf-icon.svg'

export default function ssvbuyruqlari() {
  return (
    <div className='dasturlar'>
      <div className="container">
        <h2 className='tittle'>Sog'liqni saqlash vazirligi buyruqlari</h2>

        <div className="row">

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={pdf} alt="pdf-icon" />
                  <h4>05.02.2024 yil. N 4</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/ssv1.pdf">
                    <button className='view'>Ochish</button>
                  </a>

                  <a href="/ssv1.pdf" download="">
                    <button className='download'>Saqlash</button>
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
                  <h4>03.17.2020 yil. N 8-7-9/361</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/ssv2.pdf">
                    <button className='view'>Ochish</button>
                  </a>

                  <a href="/ssv2.pdf" download="">
                    <button className='download'>Saqlash</button>
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
