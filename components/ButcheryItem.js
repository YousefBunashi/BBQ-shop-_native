import { ListItem } from "native-base";
import React from "react";
import { ButcheryItemStyled } from "../ styles";
import { Image } from "react-native";

const ButcheryItem = ({ butchery, navigation }) => {
  return (
    <ListItem
      onPress={() => navigation.navigate("Bbqs", { butchery: butchery })}
    >
      <ButcheryItemStyled>{butchery.name}</ButcheryItemStyled>
    </ListItem>
  );
};

export default ButcheryItem;
