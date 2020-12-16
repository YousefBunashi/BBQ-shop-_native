import { makeAutoObservable } from "mobx";

import instance from "./instance";

class BbqsStore {
  bbqs = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }
  fetchBbqs = async () => {
    try {
      const response = await instance.get("/bbqs");
      this.bbqs = response.data;
      this.loading = false;
    } catch (error) {
      console.error("BbqsStore -> fetchBbqs -> error", error);
    }
  };
  getBbqById = (bbqId) => this.bbqs.find((bbq) => bbq.id === bbqId);
}

const bbqsStore = new BbqsStore();
bbqsStore.fetchBbqs();

export default bbqsStore;
