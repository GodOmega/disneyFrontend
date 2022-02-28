import React from 'react'
import Image from 'next/image'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { Main, Wrap } from './style'

const Carousel = () => {

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
                <Image src="http://localhost:3000/images/carousel-1.jpg" layout='fill' />
            </Wrap>
            <Wrap>
                <Image src="http://localhost:3000/images/carousel-2.jpg" layout='fill' />
            </Wrap>
            <Wrap>
                <Image src="http://localhost:3000/images/carousel-3.jpg" layout='fill' />
            </Wrap>
            <Wrap>
                <Image src="http://localhost:3000/images/carousel-4.jpg" layout='fill' />
            </Wrap>
            <Wrap>
                <Image src="http://localhost:3000/images/carousel-5.jpg" layout='fill' />
            </Wrap>
            <Wrap>
                <Image src="http://localhost:3000/images/carousel-6.jpg" layout='fill' />
            </Wrap>
            <Wrap>
                <Image src="http://localhost:3000/images/carousel-7.jpg" layout='fill' />
            </Wrap>
            <Wrap>
                <Image src="http://localhost:3000/images/carousel-8.jpg" layout='fill' />
            </Wrap>
        </Main>
    </>
  )
}

export default Carousel