import React from 'react'
import { PureIncrement, PureDecrement } from 'pure_counter';

export default function Results() {
  return (
    <section className='Results'>
      <div className="container">
        <h2 className='tittle'>Uzluksiz ta'lim orqali millat salomatligi sari</h2>
        <div className="row">

          <div className="mb-4 col-md-4">
            <div className="card blue">
              <div className="card-body">
                <h4><h1><PureIncrement start={0} end={90} duration={2} className="purecounter" /></h1> yillik shifokorlar ta'limining tarixi</h4>
              </div>
            </div>
          </div>

          <div className="mb-4 col-md-4">
            <div className="card white">
              <div className="card-body">
                <h4><h1><PureIncrement start={0} end={5} duration={2} className="purecounter" /></h1> viloyat filiallari</h4>
              </div>
            </div>
          </div>

          <div className="mb-4 col-md-4">
            <div className="card blue">
              <div className="card-body">
                <h4><h1><PureIncrement start={0} end={71.6} duration={2} className="purecounter" />%</h1> ilmiy darajali xodimlar</h4>
              </div>
            </div>
          </div>

          <div className="mb-4 col-md-4">
            <div className="card white">
              <div className="card-body">
                <h4><h1><PureIncrement start={0} end={5} duration={2} className="purecounter" /></h1> yuqori texnologiyali simulatsiya markazlari</h4>
              </div>
            </div>
          </div>

          <div className="mb-4 col-md-4">
            <div className="card blue">
              <div className="card-body">
                <h4><h1><PureIncrement start={0} end={5} duration={2} className="purecounter" /></h1> fakultetlar</h4>
              </div>
            </div>
          </div>

          <div className="mb-4 col-md-4">
            <div className="card white">
              <div className="card-body">
                <h4><h1><PureIncrement start={0} end={3} duration={2} className="purecounter" /></h1> akademik</h4>
              </div>
            </div>
          </div>

          <div className="mb-4 col-md-4">
            <div className="card blue">
              <div className="card-body">
                <h4><h1><PureIncrement start={0} end={27} duration={2} className="purecounter" /></h1> ilmiy maktablar</h4>
              </div>
            </div>
          </div>

          <div className="mb-4 col-md-4">
            <div className="card white">
              <div className="card-body">
                <h4><h1><PureIncrement start={0} end={52} duration={2} className="purecounter" /></h1> kafedra ilg'or klinika va markazlarda</h4>
              </div>
            </div>
          </div>

          <div className="mb-4 col-md-4">
            <div className="card blue">
              <div className="card-body">
                <h4><h1><PureIncrement start={0} end={208} duration={2} className="purecounter" /></h1> fan nomzodi va doktorlari</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
