import React from 'react'
import Image from 'next/image'

import { CardContainer, ImageContainer } from './style'

const SearchedCard = ({image}) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={image} layout='fill' />
      </ImageContainer>
    </CardContainer>
  )
}

export default SearchedCard