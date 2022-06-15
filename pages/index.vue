<template>
  <div>
    <nuxt-link to="/ems"> ems Go</nuxt-link>
    <button @click="chageState">state Change</button>
    <div>adadzsdad {{ ts }} {{ useX }}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <p>storeCount : {{ store.count }}</p>
    <p>RefCount : {{ count }}</p>
    <p>NoRefCount : {{ noRefCount }}</p>
    <p>getterCount : {{ getterCount }}</p>

    <button @click="awaitFunc">async 함수 실행</button>
    <test-2 />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCounterStore } from "@/store/index";

export default defineComponent({
  setup() {
    const ts = "test txats";
    // ref <-- 메모리 누수 문제로
    // nuxt엣는 useState로 대체
    const useX = useState<string>("x", () => "xState");

    const chageState = () => {
      useX.value = "change x State ";
    };
    // store
    const store = useCounterStore();
    const { count, getterCount } = toRefs(store);
    const { count: noRefCount, increment, decrement, waitFunction } = store;

    const awaitFunc = async () => {
      await waitFunction().then((v) => console.log(v));
    };
    return {
      ts,
      useX,
      chageState,
      store,
      count,
      noRefCount,
      getterCount,
      increment,
      decrement,
      awaitFunc,
    };
  },
});
</script>

<style scoped></style>
