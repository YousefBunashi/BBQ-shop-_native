import { makeAutoObservable } from "mobx";
import instance from "./instance";
import AsyncStorage from "@react-native-community/async-storage";

class CartStore {
  items = [];
  addItemToCart = async (newItem) => {
    const foundItem = await AsyncStorage.setItem(
      "myCart",
      JSON.stringify(this.items)
    );

    if (foundItem) foundItem.quantity += newItem.quantity;
    else this.items.push(newItem);
  };
  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }
  fetchCart = async () => {
    const items = await AsyncStorage.getItem("myCart");
    this.items = items ? JSON.parse(items) : [];
  };
  removeItemFromCart = async (itemId) => {
    this.items = this.items.filter((item) => item.bbqId !== itemId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };
  checkout = async () => {
    try {
      const res = await instance.post("/checkout", this.items);
      console.log("CartStore -> checkout -> res", res.data);
      this.items = [];
      alert("You have successfully checked out.");
    } catch (error) {
      console.log("CartStore -> checkout -> error", error);
    }
  };

  constructor() {
    makeAutoObservable(this);
  }
}
const cartStore = new CartStore();
cartStore.fetchCart();

export default cartStore;
