import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/Laptops",
    name: "Laptops",
    component: () => import("@/views/Laptops.vue"),
  },
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history",
});

export default router;
