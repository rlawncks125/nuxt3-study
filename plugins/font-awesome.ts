import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fas, faBan, faList } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

library.add(fas, faBan, faList);

export default defineNuxtPlugin((nuxtApp) => {
  // @ts-ignore
  nuxtApp.vueApp.component("fa-icon", FontAwesomeIcon);
});
