import React from "react";



import MainLayout from "../components/layouts/MainLayout";
import Slider from '../components/elements/MainSlider';
const home = () => {
  return (
    <>
      <MainLayout >
        <div className="container-w">
          <Slider />
        </div>
      </MainLayout>
    </>
  );
};

export default home;
