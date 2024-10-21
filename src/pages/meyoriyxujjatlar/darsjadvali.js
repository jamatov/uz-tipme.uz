import React from 'react'
import pdf from '../../images/icons/pdf-icon.svg'

export default function darsjadvali() {
  return (
    <div className='dasturlar'>
      <div className="container">
        <h2 className="tittle">Dars jadvali</h2>

        <div className="row">

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={pdf} alt="pdf-icon" />
                  <h4>Tugʻma nuqsonlarning prenatal ultratovush diagnostikasi</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dars-jadval1.pdf">
                    <button className='view'>Ochish</button>
                  </a>

                  <a href="/dars-jadval1.pdf" download="">
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
                  <h4>KLINIK ULTRATOVUSh DIAGNOSTIKASI</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dars-jadval2.pdf">
                    <button className='view'>Ochish</button>
                  </a>

                  <a href="/dars-jadval2.pdf" download="">
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
                  <h4>Akusherlik amaliyotida dopplerografiya texnologiyalari</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dars-jadval3.pdf">
                    <button className='view'>Ochish</button>
                  </a>

                  <a href="/dars-jadval3.pdf" download="">
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
                  <h4>Klinik neyrosonografiya</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dars-jadval4.pdf">
                    <button className='view'>Ochish</button>
                  </a>

                  <a href="/dars-jadval4.pdf" download="">
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
                  <h4>Ultratovush mammografiyasining innovasion texnologiyalari</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dars-jadval5.pdf">
                    <button className='view'>Ochish</button>
                  </a>

                  <a href="/dars-jadval5.pdf" download="">
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
