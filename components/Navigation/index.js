import BbqList from "../BbqList";
import ButcheryList from "../ButcheryList";
import Home from "../Home";
import React from "react";
import CartList from "../CartList";
import { createStackNavigator } from "@react-navigation/stack";
import CartButton from "../buttons/CartButton";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
const { Navigator, Screen } = createStackNavigator();
const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "black",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />

      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Butcheries"
        component={ButcheryList}
        options={{
          title: "Choose a Butchery",
          headerRight: () => <CartButton />,
        }}
      />
      <Screen
        name="Bbqs"
        component={BbqList}
        options={({ route }) => {
          const { butchery } = route.params;
          return {
            title: butchery.name,
            headerRight: () => <CartButton />,
          };
        }}
      />
      <Screen name="Cart" component={CartList} />
    </Navigator>
  );
};
export default RootNavigator;
