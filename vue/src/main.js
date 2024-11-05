import { createApp } from "vue";
import store from "./store";
import router from "./router";
import "./index.css";
import App from "./App.vue";
import { Carousel3dPlugin } from "@nanoandrew4/vue3-carousel-3d"


createApp(App)
    .use(router)
    .use(store)
    .use(Carousel3dPlugin)
    .mount("#app");
