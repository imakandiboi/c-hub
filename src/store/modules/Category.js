// vuex store for categories rendered at home.vue

const state = {
  categories: [
    {
      image: "",
      name: "Laptops",
      caption: "brand new  laptop ",
    },
    {
      image: "",
      name: "printer",
      caption: "brand new  printers ",
    },
    {
      image: "",
      name: "Gadgets",
      caption: "brand new gadget ",
    },
    {
      image: "",
      name: " Smartphone",
      caption: "brand new smartphone ",
    },
    {
      image: "",
      name: "Games",
      caption: "brand new games cd's ",
    },
    {
      image: "",
      name: "projectors",
      caption: "brand new projectors ",
    },
    {
      image: "",
      name: "Consoles",
      caption: "brand new console ",
    },
    {
      image: "",
      name: "Smart Cables",
      caption: "brand new cables ",
    },
    {
      image: "",
      name: "Inverters",
      caption: "brand new inverter",
    },
  ],
  requestLoading: false,
};
const getters = {
  Is_Loading(state) {
    return state.requestLoading;
  },
  GetCategories(state) {
    return state.categories;
  },
};

const mutations = {
  SET_REQUEST_LOADING(state, status) {
    state.requestLoading = status;
  },
};
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
