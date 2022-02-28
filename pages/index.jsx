import React from "react";



import MainLayout from "../components/layouts/MainLayout";
import Slider from '../components/elements/MainSlider';
import CardsContainer from "../components/elements/CardsContainer";
import CarouselContainer from "../components/elements/CarouselContainer";


const home = () => {
  return (
    <>
      <MainLayout >

        <Slider />

        {/* <CardsContainer /> */}

        <CarouselContainer title={"Recomendaciones para ti"} />
        <CarouselContainer title={"Novedades en Disney +"} />

      </MainLayout>
    </>
  );
};

export default home;
