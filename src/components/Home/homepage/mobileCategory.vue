<template>
  <div>
    <div class="grid grid-cols-3 p-4">
      <router-link
        :to="{ name: `/${category.name}`, params: { id: category.id } }"
        v-for="(category, index) in categories"
        :key="index"
        class="cursor-pointer"
      >
        <div class="w-auto h-48 m-2 text-center relative">
          <div>
            <img src="" alt="" srcset="" />
          </div>
          <div class="bottom-8 absolute p-1">
            <p class="font-sans font-light">{{ category.name }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  props: { categories: Array },
  name: "mobileCategory",
  data() {
    return {
      getCategory: store.categories,
    };
  },
};
</script>

<style>
</style>