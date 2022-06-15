import { defineNuxtModule } from "@nuxt/kit";
import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // SSG 배포 설정
  ssr: false,

  buildModules: [
    // https://composition-api.nuxtjs.org/getting-started/setup#quick-start
    // "@nuxtjs/composition-api/module", // nuxt2 에서 사용할경우
    "@pinia/nuxt",
  ],
  // tailwind & postcss 설정
  css: ["@/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  // 모듈로 css 주입
  modules: [
    // defineNuxtModule({
    //   setup(options, nuxt) {
    //     nuxt.options.css.push("@/assets/css/test.css");
    //     // nuxt.options.css.push("~/assets/css/tailwind.css");
    //   },
    // }),
  ],
});
