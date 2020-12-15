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

const Home = () => {
  return (
    <HomeBackground
      source={{
        uri:
          "https://annabanana.co/wp-content/uploads/2020/03/Chocolate-Chip-Cookies-22.jpg",
      }}
    >
      <OverLayContainer>
        <TopStyling>
          <Title>More Than a Meat</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyled
            onPress={() => alert("Take me to the list of Butcharies")}
          >
            {/* <Text> Click here to skip</Text> */}
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
