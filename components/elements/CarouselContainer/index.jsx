import React from 'react'

import Carousel from '../Carousel'
import { Section } from './style'

const CarouselContainer = ({title}) => {
  return (
    <Section className='container-w'>
        <h4>{title}</h4>
        <Carousel />
    </Section>
  )
}

export default CarouselContainer