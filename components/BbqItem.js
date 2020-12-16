import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";
import { Button, Left, ListItem, Right } from "native-base";
import { Image, Text } from "react-native";
import { ButcheryItemStyled, AddButtonText, AddButton } from "../ styles";
import cartStore from "./stores/cartStore";

const BbqItem = ({ bbq }) => {
  const [quantity, setQuantity] = useState(1);
  const handleAdd = () => {
    const newItem = { quantity, bbqId: bbq.id };
    cartStore.addItemToCart(newItem);
    console.log("handleAdd -> newItem", newItem);
  };
  console.log("bbq", bbq);
  return (
    <ListItem>
      <Left>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: bbq.image }}
        />
        <ButcheryItemStyled>{bbq.name}</ButcheryItemStyled>
      </Left>
      <Right>
        <NumericInput
          rounded
          value={quantity}
          onChange={setQuantity}
          totalHeight={30}
          totalWidth={60}
          initValue={1}
        />
        <AddButton onPress={handleAdd}>
          <AddButtonText>Add</AddButtonText>
        </AddButton>
      </Right>
    </ListItem>
  );
};

export default BbqItem;
