import React from 'react'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { Main, Wrap } from './style'

const Slick = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    autoplaySpeed: 3500,
  };

  return (
    <Main {...settings}>
      <Wrap>
        <img src="/images/imagen-slider.jpg" alt="Images" />
      </Wrap>
      <Wrap>
        <img src="/images/imagen-slider-2.jpg" alt="Images" />
      </Wrap>
      <Wrap>
        <img src="/images/images-slider-3.jpg" alt="Images" />
      </Wrap>
    </Main>
  )
}

export default Slick