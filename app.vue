<template>
  <div>
    <div class="border text-red-400">app vue navBar</div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    onMounted(async () => {
      const setDarkmode = () => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      };

      // 다크모드 감지
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", setDarkmode);
    });

    return {};
  },
});
</script>

<style>
body {
  @apply bg-blue-400 dark:bg-teal-400;
}
</style>
