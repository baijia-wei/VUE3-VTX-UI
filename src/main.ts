import { router } from "./router";
import { createApp } from "vue"; //创建app实例
import App from "./App.vue";
import "./index.scss";

const app = createApp(App);
app.use(router);

app.mount("#app");
