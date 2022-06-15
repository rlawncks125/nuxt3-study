<template>
  <div>
    <p>{{ $route.params }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const route = useRoute();

    useHead({
      title: `parms 를 가지는 페이지 : ${route.params.users} + ${route.params.id}`,
      meta: [
        {
          name: "description",
          content: "Nuxt3 Test App Vue.",
        },
        {
          name: "og:title",
          property: "og:title",
          content: `users 와 id params을 받습니다.`,
        },
        {
          name: "og:description",
          property: "og:description",
          content: `${route.params.users} - ${route.params.id} 사이트 입니다.`,
        },
        {
          name: "og:image",
          property: "og:image",
          content: `https://res.cloudinary.com/dhdq4v4ar/image/upload/v1654624758/%ED%8F%AC%ED%94%841_isxw3h.jpg`,
        },
      ],
    });

    return {};
  },
});
</script>
