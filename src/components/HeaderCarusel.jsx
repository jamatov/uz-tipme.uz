import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/carusel4.jpg'
import img2 from '../images/carusel3.jpg'

function HeaderCarusel() {
  return (
    <header className='header-home'>
      <div className="container">
        <div className="header-info">

          <h1>Tibbiyot xodimlarining kasbiy malakasini  rivojlantirish <br /> markazi</h1>
        </div>
      </div>
      <Carousel className='carusel' slide={false}>
        <Carousel.Item className='carusel-item'>
          <img className='carusel-img' src={img2} alt="header-img" />
          {/* <Carousel.Caption className='carusel-caption'>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item className='carusel-item'>
          <img className='carusel-img' src={img1} alt="header-img" />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        
      </Carousel>
    </header>
  );
}

export default HeaderCarusel;