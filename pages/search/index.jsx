import React from "react";

import { SearchResultContainer } from "../../styles/pages/search";

import MainLayout from "../../components/layouts/MainLayout";
import SearchContainer from "../../components/elements/SearchContainer";
import SearchedCard from "../../components/elements/SearchedCard";

const searchElements = () => {
  return (
    <>
      <MainLayout>
        <SearchContainer />

        <SearchResultContainer>
          <h5>Explore</h5>
          <div>
            <SearchedCard image="/images/carousel-1.jpg" />
            <SearchedCard image="/images/carousel-2.jpg" />
            <SearchedCard image="/images/carousel-3.jpg" />
            <SearchedCard image="/images/carousel-4.jpg" />
            <SearchedCard image="/images/carousel-5.jpg" />
            <SearchedCard image="/images/carousel-6.jpg" />
            <SearchedCard image="/images/carousel-7.jpg" />
            <SearchedCard image="/images/carousel-8.jpg" />
            <SearchedCard image="/images/carousel-1.jpg" />
            <SearchedCard image="/images/carousel-2.jpg" />
            <SearchedCard image="/images/carousel-3.jpg" />
            <SearchedCard image="/images/carousel-4.jpg" />
            <SearchedCard image="/images/carousel-5.jpg" />
            <SearchedCard image="/images/carousel-6.jpg" />
            <SearchedCard image="/images/carousel-7.jpg" />
            <SearchedCard image="/images/carousel-8.jpg" />
          </div>
        </SearchResultContainer>
      </MainLayout>
    </>
  );
};

export default searchElements;
