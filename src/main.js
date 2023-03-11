import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import uiComponents from "@/ui-components";
import "./index.css";

const app = createApp(App);

uiComponents.map((item) => app.component(item.name, item));

app.use(router);
app.use(store);
app.mount("#app");
