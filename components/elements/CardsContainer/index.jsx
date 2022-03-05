import React, {useState, useEffect} from 'react'

import CardItem from '../CardItem'

import { CardContainer } from './style'

const CardsContainer = () => {
  const [isLoding, setIsLoading] = useState(true);

  const handleLoading = () => {
    console.log('false')
    setIsLoading(false);
    console.log(isLoding)
  }

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load",handleLoading);
  }, []);

  if(isLoding) {
    return ''
  }

  return (
    <CardContainer>
      <CardItem image="/images/disneyMiniLogo.png" video="/videos/disney.mp4" />
      <CardItem image="/images/pixarMiniLogo.png"  video="/videos/pixar.mp4"/>
      <CardItem image="/images/marvelMiniLogo.png" video="/videos/marvel.mp4"/>
      <CardItem image="/images/starWarsMiniLogo.png" video="/videos/star-wars.mp4"/>
      <CardItem image="/images/natgeoMiniLogo.png" video="/videos/natgeo.mp4"/>
    </CardContainer>
  )
}

export default CardsContainer