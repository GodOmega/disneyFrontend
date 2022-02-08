import React from "react";

import Navbar from '../elements/Navbar';

const MainLayout = ({children}) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      {children}
    </>
  );
};

export default MainLayout;
