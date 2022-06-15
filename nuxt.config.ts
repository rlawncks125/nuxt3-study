import { defineNuxtModule } from "@nuxt/kit";
import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    // https://composition-api.nuxtjs.org/getting-started/setup#quick-start
    //  '@nuxtjs/composition-api/module', // nuxt2 에서 사용할경우
    "@pinia/nuxt",
  ],
  modules: [
    // css 선언
    defineNuxtModule({
      setup(options, nuxt) {
        nuxt.options.css.push("@/assets/test.css");
      },
    }),
  ],
});
