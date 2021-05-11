<template>
  <div class="pt-4 px-16 w-auto h-full top-48">
    <div class="lg:py-16 px-12">
      <div class="flex">
        <div class="flex items-center w-full h-48 p-4 flex-col w-full gap-y-2">
          <div class="w-1/2 h-auto text-center p-4">
            <h1 class="text-7xl text-gray-500 font-sans font-thin md:text-4xl">
              Experience ~
              <span class="text-gray-900 text-7xl font-normal md:text-3xl">
                Discover</span
              >
            </h1>
          </div>
          <div class="w-1/2 h-auto text-center p-4">
            <p class="text-gray-700 capitalize text-xl font-thin font-sans">
              the best online store for gadget,gaming consoles and accesories
            </p>
          </div>
        </div>
      </div>
      <div class="grid grid-rows-3 grid-flow-col gap-8 m-4">
        <router-link
          :to="{ name: `/${category.name}`, params: { id: category.id } }"
          v-for="category in categories"
          :key="category.name"
          class="shadow-md transition duration-500 transform hover:bg-gray-50 hover:scale-110"
        >
          <div class="bg-white w-auto h-auto rounded-sm shadow-inner">
            <div class="p-2 w-full h-72 relative">
              <div class="w-auto h-auto m-4">
                <img src="" alt="" srcset="" />
              </div>
              <div
                class="w-auto h-auto m-4 text-center absolute left-40 top-16"
              >
                <h4 class="font-sans text-4xl font-thin py-8 capitalize">
                  {{ category.name }}
                </h4>
                <p class="capitalize font-sans font-thin text-xl">
                  {{ category.caption }}
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  props: { categories: Array },

  name: "Category",
  data() {
    return {
      CurrentCategory: this.$route.params.id,
      getCategory: store.categories,
    };
  },
  methods: {},
  computed: {
    getCurrentCategory() {
      return store.categories.find(
        (category) => category.id === this.CurrentCategory
      );
    },
  },
};
</script>

<style>
</style>