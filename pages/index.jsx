import React from "react";



import MainLayout from "../components/layouts/MainLayout";
import Slider from '../components/elements/MainSlider';
import CarouselContainer from "../components/elements/CarouselContainer";


const home = () => {
  return (
    <>
      <MainLayout >
        <div className="container-w">
          <Slider />
        </div>

        <CarouselContainer title={"Recomendaciones para ti"} />
        <CarouselContainer title={"Novedades en Disney +"} />

      </MainLayout>
    </>
  );
};

export default home;
