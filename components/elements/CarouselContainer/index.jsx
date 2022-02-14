import React from 'react'

import Carousel from '../Carousel'
import { Section } from './style'

const CarouselContainer = ({title}) => {
  return (
    <Section>
        <h4>{title}</h4>
        <Carousel />
    </Section>
  )
}

export default CarouselContainer