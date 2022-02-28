import React from 'react'
import Image from 'next/image'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { Main, Wrap, ImageTextWrapper} from './style'

import RightArrow from '../SliderRightArrow'
import LeftArrow from '../SliderLeftArrow'

const Slick = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay:false,
    autoplaySpeed: 3500,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <>
      <Main {...settings}>
      <Wrap>
        <Image src="http://localhost:3000/images/imagen-slider.jpg" layout='fill' />
        <ImageTextWrapper>
          <img src="/images/buenasMigas.png" alt="Images" />
        </ImageTextWrapper>
      </Wrap>
      <Wrap>
        <Image src="http://localhost:3000/images/imagen-slider-2.jpg" layout='fill' />
        <ImageTextWrapper>
          <img src="/images/hawkeye.png" alt="Images" />
        </ImageTextWrapper>
      </Wrap>
      <Wrap>
        <Image src="http://localhost:3000/images/images-slider-3.jpg" layout='fill' />
        <ImageTextWrapper >
          <img src="/images/mandalorian.png" alt="Images" />
        </ImageTextWrapper>
      </Wrap>
      </Main>
    </>
  )
}

export default Slick