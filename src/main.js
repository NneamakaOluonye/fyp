import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@deposits/ui-kit-vue/dist/style.css";
import PageWrapper from "~/components/PageWrapper.vue";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";

const app = createApp(App);

app.use(router);
const pinia = createPinia();
pinia.use(piniaPluginPersistedState);
app.use(pinia);

app.mount("#app");
app.component("page-wrapper", PageWrapper);
