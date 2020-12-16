import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from "native-base";
import { CartButtonStyled, CartTextStyled } from "../../ styles";
import cartStore from "../stores/cartStore";
import { observer } from "mobx-react";
const CartButton = () => {
  const navigation = useNavigation();
  return (
    <Button transparent light onPress={() => navigation.navigate("Cart")}>
      <CartButtonStyled type="MaterialCommunityIcons" name="cart" />
      <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>
    </Button>
  );
};

export default observer(CartButton);
