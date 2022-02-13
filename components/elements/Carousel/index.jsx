import React from 'react'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { Main, Wrap } from './style'

const Carousel = ({title}) => {

  const settings = {
    infinite: false,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 2,
            }
        }
    ]
  };

  return (
    <>
        <Main {...settings}>
            <Wrap>
                <img src="/images/carousel-1.jpg" alt="Images" />
            </Wrap>
            <Wrap>
                <img src="/images/carousel-2.jpg" alt="Images" />
            </Wrap>
            <Wrap>
                <img src="/images/carousel-3.jpg" alt="Images" />
            </Wrap>
            <Wrap>
                <img src="/images/carousel-4.jpg" alt="Images" />
            </Wrap>
            <Wrap>
                <img src="/images/carousel-5.jpg" alt="Images" />
            </Wrap>
            <Wrap>
                <img src="/images/carousel-6.jpg" alt="Images" />
            </Wrap>
            <Wrap>
                <img src="/images/carousel-7.jpg" alt="Images" />
            </Wrap>
            <Wrap>
                <img src="/images/carousel-8.jpg" alt="Images" />
            </Wrap>
        </Main>
    </>
  )
}

export default Carousel