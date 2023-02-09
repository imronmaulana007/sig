import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import axios from "axios";

import router from "./router";
import VueSweetalert2 from "vue-sweetalert2";


const options = {
    confirmButtonColor: "#41b882",
    cancelButtonColor: "#ff7674",
};
// import "./assets/main.css";
import "./assets/bootstrap-utilities.css";
import "./assets/style.css";

const app = createApp(App);
app.config.globalProperties.$axios = axios;

app.use(createPinia());
app.use(VueSweetalert2, options);

app.use(router);

app.mount("#app");
