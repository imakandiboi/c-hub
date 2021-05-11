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
    <div class="block lg:hidden">
      <div class="top-10">
        <MobileLander />
      </div>
      <div class="pt-16">
        <mobileCategory :categories="GetCategories" />
      </div>
    </div>
  </div>
</template>

<script>
import DesktopLander from "@/components/Home/DesktopLander";
import MobileLander from "@/components/Home/MobileLander";
import mobileCategory from "@/components/Home/homepage/mobileCategory.vue";

import Category from "@/components/Home/homepage/Category.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    mobileCategory,
    MobileLander,
    DesktopLander,
    Category,
  },
  computed: {
    ...mapGetters("category", ["GetCategories"]),
  },
};
</script>

<style scoped>
</style>