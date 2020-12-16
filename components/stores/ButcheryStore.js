import { makeAutoObservable } from "mobx";

import instance from "./instance";

class ButcheryStore {
  butcheries = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }

  fetchButcheries = async () => {
    try {
      const response = await instance.get("/butcheries");
      this.butcheries = response.data;
      this.loading = false;
    } catch (error) {}
  };
}

const butcheryStore = new ButcheryStore();
butcheryStore.fetchButcheries();

export default butcheryStore;
