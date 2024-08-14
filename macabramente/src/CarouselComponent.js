import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import foto1 from './car1.jpeg';
import foto2 from './car2.jpeg';

import foto4 from './ca4.jpeg';

import './CarouselStyles.css'; // Substitua com o caminho do seu arquivo CSS



const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="carousel-container">
    <div style={{ maxWidth: '500px', margin: '0 auto', marginBottom: '10px' }}>
      <Slider {...settings}>
        <div>
          <img src={foto2} alt="Imagem 1" style={{ width: '100%', borderRadius: '30px' }} />
        </div>
        <div>
          <img src={foto4} alt="Imagem 2" style={{ width: '100%', borderRadius: '30px' }} />
        </div>

        <div>
          <img src={foto1} alt="Imagem 3" style={{ width: '100%', borderRadius: '30px' }} />
        </div>
      </Slider>
    </div>
    </div>
  );
};

export default CarouselComponent;
