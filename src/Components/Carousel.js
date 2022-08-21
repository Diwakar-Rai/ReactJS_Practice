import React from 'react'
import carousel1 from '../images/carousel-1.jpg';
import carousel2 from '../images/carousel-2.jpg';
import carousel3 from '../images/carousel-3.jpg';
const Carousel = () => {
  return (
    <div>
        <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel1} className="d-block w-100 img-fluid" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carousel2} className="d-block w-100 img-fluid" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carousel3} className="d-block w-100 img-fluid" alt="..." />
          </div>
        </div>
    </div>

    </div>
  )
}

export default Carousel