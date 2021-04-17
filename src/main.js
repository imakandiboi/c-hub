import Vue from "vue";
import App from "./App.vue";
//  Tailwind main.js
import "./assets/tailwind.css";
import router from "./router";
import store from "./store";

// Vue-agile main.js
import VueAgile from "vue-agile";

Vue.use(VueAgile);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
