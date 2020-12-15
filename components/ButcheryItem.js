import { ListItem } from "native-base";
import React from "react";
import { ButcheryItemStyled } from "../ styles";
import { Image } from "react-native";

const ButcheryItem = ({ butchery }) => {
  return (
    <ListItem>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: butchery.image }}
      />
      <ButcheryItemStyled>{butchery.name}</ButcheryItemStyled>
    </ListItem>
  );
};

export default ButcheryItem;
