import React from 'react'
import pdf from '../../images/icons/pdf-icon.svg'

export default function markazbuyruqlari() {
  return (
    <div className='dasturlar'>
      <div className="container">
        <h2 className="tittle">Markaz buyruqlari</h2>

        <div className="row">

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={pdf} alt="pdf-icon" />
                  <h4>05.12.2021 yil. N 63</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/markaz-buyruqlari.pdf">
                    <button className='view'>Ochish</button>
                  </a>

                  <a href="/markaz-buyruqlari.pdf" download="">
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
