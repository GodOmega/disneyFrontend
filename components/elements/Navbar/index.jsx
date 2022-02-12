import React from "react";
import Image from 'next/image'
import { Nav, LogoContainer ,ListContainer, ListElement } from "./style";

const Navbar = () => {
  return (
    <Nav>
      <LogoContainer>
        <Image src="/images/disneyLogo.png" width={80} height={49} alt="disneyLogo" />
      </LogoContainer>
        <ListContainer>
          <ListElement>
            <span>
              <Image src="/images/homeIcon.png" width={14} height={13} alt="disneyLogo" />
            </span>
            <a href="#">inicio</a>
          </ListElement>
          <ListElement>
            <span>
              <Image src="/images/searchIcon.png" width={13} height={13} alt="disneyLogo" />
            </span>
            <a href="#">búsqueda</a>
          </ListElement>
          <ListElement>
            <span>
              <Image src="/images/moviesIcon.png" width={17} height={13} alt="disneyLogo" />
            </span>
            <a href="#">películas</a>
          </ListElement>
          <ListElement>
            <span>
              <Image src="/images/seriesIcon.png" width={13} height={13} alt="disneyLogo" />
            </span>
            <a href="#">series</a>
          </ListElement>
        </ListContainer>
    </Nav>
  );
};

export default Navbar;
