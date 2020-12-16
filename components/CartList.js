import { observer } from "mobx-react";
import React from "react";
import { List, Spinner } from "native-base";
import CartItem from "./CartItem";
import bbqsStore from "./stores/bbqStore";
import cartStore from "./stores/cartStore";
import { CheckoutButton, CheckoutButtonText } from "../ styles";

const CartList = () => {
  if (bbqsStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...bbqsStore.getBbqById(item.bbqId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.name} />);
  return (
    <>
      <List>{cartList}</List>
      <CheckoutButton onPress={cartStore.checkout}>
        <CheckoutButtonText>Checkout</CheckoutButtonText>
      </CheckoutButton>
    </>
  );
};

export default observer(CartList);
