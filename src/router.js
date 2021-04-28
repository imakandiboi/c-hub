import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },

  {
    path: "/Laptops/:slug",
    name: "Laptops",
    component: () => import("@/views/Laptops.vue"),
  },
  {
    path: "/Printers/:slug",
    name: "Printers",
    component: () => import("@/views/Printers.vue"),
  },
  {
    path: "/Gadgets/:slug",
    name: "Gadgets",
    component: () => import("@/views/Gadgets.vue"),
  },

  {
    path: "/SmartPhones/:slug",
    name: "SmartPhones",
    component: () => import("@/views/SmartPhones.vue"),
  },
  {
    path: "/SmartCables/:slug",
    name: "SmartCables",
    component: () => import("@/views/SmartCables.vue"),
  },
  {
    path: "/Inverters/:slug",
    name: "Inverters",
    component: () => import("@/views/Inverters.vue"),
  },
  {
    path: "/Games/:slug",
    name: "Games",
    component: () => import("@/views/Games.vue"),
  },
  {
    path: "/Consoles/:slug",
    name: "Consoles",
    component: () => import("@/views/Consoles.vue"),
  },
  {
    path: "/Projectors/:slug",
    name: "Projectors",
    component: () => import("@/views/Projectors.vue"),
  },
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history",
});

export default router;
