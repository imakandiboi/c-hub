// vuex store for categories rendered at home.vue

const state = {
  categories: [
    {
      image: "",
      name: "Laptops",
      caption: "brand new  laptop ",
      id: 0,
    },
    {
      image: "",
      name: "printer",
      caption: "brand new  printers ",
      id: 1,
    },
    {
      image: "",
      name: "Gadgets",
      caption: "brand new gadget ",
      id: 2,
    },
    {
      image: "",
      name: " Smartphone",
      caption: "brand new smartphone ",
      id: 3,
    },
    {
      image: "",
      name: "Games",
      caption: "brand new games cd's ",
      id: 4,
    },
    {
      image: "",
      name: "projectors",
      caption: "brand new projectors ",
      id: 5,
    },
    {
      image: "",
      name: "Consoles",
      caption: "brand new console ",
      id: 6,
    },
    {
      image: "",
      name: "Smart Cables",
      caption: "brand new cables ",
      id: 7,
    },
    {
      image: "",
      name: "Inverters",
      caption: "brand new inverter",
      id: 8,
    },
  ],
  requestLoading: false,
};
const getters = {
  getCurrentCategory(state) {
    return state.categories.id;
  },
  GetCategories(state) {
    return state.categories;
  },
};

const mutations = {};
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
