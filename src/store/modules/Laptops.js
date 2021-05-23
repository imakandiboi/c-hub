//vuex store to be rendered at the laptop view or page
const state = {
  laptops: [
    {
      image: "",
      name: "Apple MacBook Air 2012",
      descriptions: "Apple mace",
      price: "#123,000",
      id: 0,
    },
    {
      image: "",
      name: "Apple MacBook Air 2020",
      descriptions: "Apple MacBook Air",
      price: "#123,000",
      id: 1,
    },
    {
      image: "",
      name: "Apple MacBook Pro 2015",
      descriptions: "Apple MacBook Pro",
      price: "#123,000",
      id: 2,
    },
    {
      image: "",
      name: "Hp EliteBook XP",
      descriptions: "Hp EliteBook",
      price: "#123,000",
      id: 3,
    },
    {
      image: "",
      name: "Apple MacBook Pro 2010",
      descriptions: "Apple MacBook Pro",
      price: "#123,000",
      id: 4,
    },
    {
      image: "",
      name: "Apple MacBook Air 2012",
      descriptions: "Apple MacBook Air ",
      price: "#123,000",
      id: 5,
    },
    {
      image: "",
      name: "Dell latitude ",
      descriptions: "Dell latitude ",
      price: "#123,000",
      id: 6,
    },
    {
      image: "",
      name: "Lenovo TouchPad X-50 ",
      descriptions: "Lenovo TouchPad X-50 ",
      price: "#123,000",
      id: 7,
    },
    {
      image: "",
      name: "Apple MacBook Pro 2010",
      descriptions: "Apple MacBook Pro",
      price: "#123,000",
      id: 8,
    },
    {
      image: "",
      name: "Apple MacBook Air 2012",
      descriptions: "Apple mace",
      price: "#123,000",
      id: 9,
    },
    {
      image: "",
      name: "Apple MacBook Air 2012",
      descriptions: "Apple mace",
      price: "#123,000",
      id: 10,
    },
    {
      image: "",
      name: "Lenovo TouchPad X-50 ",
      descriptions: "Lenovo TouchPad X-50 ",
      price: "#123,000",
      id: 11,
    },
  ],

  requestLoading: false,
};
const getters = {
  GetLaptops(state) {
    return state.laptops;
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
