import { observer } from "mobx-react";
import React from "react";

// Styling

import {
  HomeBackground,
  Title,
  TopStyling,
  OverLayContainer,
  BottomStyling,
  ButtonStyled,
} from "../ styles";

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      source={{
        uri:
          "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/grilled-beef-steak-and-fire-martinh70.jpg",
      }}
    >
      <OverLayContainer>
        <TopStyling>
          <Title>More Than a Meat</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyled onPress={() => navigation.navigate("Butcheries")}>
            Click here to skip
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default observer(Home);
