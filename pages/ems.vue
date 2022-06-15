<template>
  <div>
    <nuxt-link to="/"> home Go</nuxt-link>
    <div>ems vue</div>
    <test-2 />
    <NuxtLink to="/ems/ews">자식</NuxtLink>
    <div>
      <NuxtPage />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
