import React from 'react'
import img1 from '../../images/link-soliq.jpg'
import img2 from '../../images/link-prizident.jpg'
import img3 from '../../images/link-xizmat.jpg'

export default function SiteLinks() {
  return (
    <section className='SiteLinks'>
      <div className="container">
        <h2 className='tittle'>Foydali havolalar</h2>
        <div className="row">

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={img1} alt="site-links" />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={img2} alt="site-links" />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={img3} alt="site-links" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
