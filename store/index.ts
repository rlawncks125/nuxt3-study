// vuex대신
// pinia 사용

import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0 }),
  getters: {
    getterCount: (state) => state.count,
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    async waitFunction() {
      return new Promise((res, rej) => {
        setTimeout(() => res("d"), 1000);
      });
    },
  },
});
