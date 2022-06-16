<template>
  <div>
    <p>{{ $route.query }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const route = useRoute();

    useHead({
      title: `parms 를 가지는 페이지 : ${route.query.users} + ${route.query.id}`,
      meta: [
        {
          name: "description",
          content: "Nuxt3 Params Vue.",
        },
        {
          name: "og:title",
          property: "og:title",
          content: `users 와 id params을 받습니다.`,
        },
        {
          name: "og:description",
          property: "og:description",
          content: `${route.query.users} - ${route.query.id} 사이트 입니다.`,
        },
        {
          name: "og:image",
          property: "og:image",
          content:
            "https://res.cloudinary.com/dhdq4v4ar/image/upload/v1653939813/back-Portfolio/cvgfjjza5eqoz4ufwowd.jpg",
        },
      ],
    });

    return {};
  },
});
</script>
