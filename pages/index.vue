<template>
  <div class="p-2">
    <p class="text-center text-amber-400">home vue( index vue )</p>
    <ul class="flex gap-2">
      <nuxt-link to="/ems"> ems Go</nuxt-link>
      <nuxt-link to="/ems"> ems Go</nuxt-link>
    </ul>

    <section class="border my-2 p-1">
      <p class="text-center text-white">data Bind Test</p>
      <div class="my-2 border p-1">
        <div>{{ ts }} : {{ useX }}</div>
        <button @click="chageState">state Change</button>
      </div>
      <div class="border p-1">
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <p>storeCount : {{ store.count }}</p>
        <p>RefCount : {{ count }}</p>
        <p>NoRefCount : {{ noRefCount }}</p>
        <p>getterCount : {{ getterCount }}</p>
      </div>
    </section>

    <section>
      <button @click="awaitFunc">async 함수 실행</button>
    </section>
    <test-2 />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCounterStore } from "@/store/index";

export default defineComponent({
  setup() {
    const ts = "text Change Test";
    // ref <-- 메모리 누수 문제로
    // nuxt엣는 useState로 대체
    const useX = useState<string>("x", () => "xState");

    const chageState = () => {
      useX.value = "change State ";
    };
    // store
    const store = useCounterStore();
    const { count, getterCount } = toRefs(store);
    const { count: noRefCount, increment, decrement, waitFunction } = store;

    const awaitFunc = async () => {
      await waitFunction().then((v) => console.log(v));
    };

    onMounted(() => {
      console.log("index.vue");
    });

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
