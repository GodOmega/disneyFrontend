import React from "react";

import Navbar from '../../elements/Navbar';
import { Main } from './style'

const MainLayout = ({children}) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Main>
        {children}
      </Main> 
    </>
  );
};

export default MainLayout;
