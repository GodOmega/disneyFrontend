import React from "react";

import Navbar from '../../elements/Navbar';
import { Main, BackgroundContainer } from './style'

const DescriptionLayout = ({children, bgSrc}) => {
  return (
    <>
        <header>
          <Navbar />
        </header>
        <Main className="container-w">
          {children}
        </Main>
        <BackgroundContainer background={bgSrc}>
          <div></div>
        </BackgroundContainer>
    </>
  );
};

export default DescriptionLayout;
