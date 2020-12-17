import React from "react";
import { View, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from "native-base";
import { CartButtonStyled, CartTextStyled } from "../../ styles";
import cartStore from "../stores/cartStore";
import { observer } from "mobx-react";
import authStore from "../stores/authStore";
const CartButton = () => {
  const handlePress = () => {
    if (authStore.user) navigation.navigate("Cart");
    else {
      Alert.alert(
        "Signin",
        "You need to sign in before seeing the cart",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };
  const navigation = useNavigation();
  return (
    <Button transparent onPress={handlePress}>
      <CartButtonStyled type="MaterialCommunityIcons" name="cart" />
      <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>
    </Button>
  );
};

export default observer(CartButton);
