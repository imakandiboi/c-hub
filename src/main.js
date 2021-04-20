import Vue from "vue";
import App from "./App.vue";
//  Tailwind main.js
import "./assets/tailwind.css";
import router from "./router";
import store from "./store";

// GSAP import
import gsap from "gsap";

// GSAP other plugins:
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";

// Vue-agile main.js
import VueAgile from "vue-agile";

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);
Vue.use(VueAgile);
Vue.config.productionTip = false;
Vue.use(gsap);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
