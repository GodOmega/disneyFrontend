import React from "react";

import DescriptionLayout from "../../components/layouts/DescriptionLayout";

import {
  DescriptionContainer,
  LogoContainer,
  InformationContainer,
  InformationImageContainer,
  PlayContainer,
  Button,
  ButtonElementsContainer,
  ButtonText,
  TextContainer
} from "../../styles/pages/description";

const watchElement = () => {
  return (
    <>
      <DescriptionLayout bgSrc="/images/bobafett-description-background.jpg">
        <DescriptionContainer>
          <LogoContainer>
            <img src="/images/bobafett-description-logo.png" alt="" />
          </LogoContainer>

          <InformationContainer>
            <div>
              <InformationImageContainer>
                <picture>
                    <img src="/images/ageAdvise.png" alt="" />
                </picture>
                <picture>
                    <img src="/images/audioDescription.png" alt="" />
                </picture>
                <picture>
                    <img src="/images/subtitleDescription.png" alt="" />
                </picture>
              </InformationImageContainer>
              <p>2019 - 2020 • 2 temporadas</p>
            </div>
            <p>Ciencia ficción, Acción y aventura</p>
          </InformationContainer>
    
          <PlayContainer>
            <Button bgColor="#f9f9f9" color="black" wrapper={true}>
              <ButtonElementsContainer>
                <img src="/images/playButton.png" alt="Play Logo" />
                <ButtonText margin="0 0 0 12px">{"tráiler"}</ButtonText>
              </ButtonElementsContainer>
            </Button>

            <Button
              bgColor="#0000004d"
              withBorder={true}
              borderColor="#f9f9f9"
              borderSize="1px"
              typeBorder="solid"
              color="#f9f9f9"
              hoverBg="#f9f9f9"
              hoverColor="black"
              wrapper={true}
            >
              <ButtonElementsContainer>
                <ButtonText >{"tráiler"}</ButtonText>
              </ButtonElementsContainer>
            </Button>
          </PlayContainer>

          <TextContainer color="#f9f9f9">
            <p>
              Tras la caída del Imperio Galáctico, la anarquía se ha esparcido en la Galaxia. Un pistolero solitario se abre paso por los bordes exteriores, ganándose su lugar como cazarrecompensas.
            </p>
          </TextContainer>

        </DescriptionContainer>
      </DescriptionLayout>
    </>
  );
};

export default watchElement;
