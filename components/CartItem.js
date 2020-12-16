import { observer } from "mobx-react";
import { Body, ListItem, Right } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import { TotalPrice, TrashIcon } from "../ styles";
import cartStore from "./stores/cartStore";

const CartItem = ({ item }) => {
  return (
    <ListItem>
      <Body>
        <Text>{item.name}</Text>
        <Text note>
          {item.price} KD x {item.quantity}
        </Text>
        <TotalPrice>{item.price * item.quantity} KD</TotalPrice>
      </Body>
      <Right>
        <TrashIcon
          onPress={() => cartStore.removeItemFromCart(item.id)}
          name="trash"
          type="Ionicons"
        />
      </Right>
    </ListItem>
  );
};

export default observer(CartItem);
