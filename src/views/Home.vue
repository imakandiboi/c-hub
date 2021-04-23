<template>
  <div>
    <div class="lg:block hidden">
      <div>
        <DesktopLander />
      </div>
      <div>
        <Category :categories="GetCategories" />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import DesktopLander from "@/components/Home/DesktopLander";
import Category from "@/components/Home/homepage/Category.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    DesktopLander,
    Category,
  },
  computed: {
    ...mapGetters("category", ["GetCategories"]),
  },
};
</script>

<style>
</style>