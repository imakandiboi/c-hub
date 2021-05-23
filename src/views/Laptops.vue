<template>
  <div>
    <Laptopdesktop :laptops="GetLaptops" />
    <laptopmobile />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Laptopdesktop from "@/components/Laptops/Laptopdesktop.vue";
import Laptopmobile from "@/components/Laptops/Laptopmobile.vue";
export default {
  components: {
    Laptopdesktop,
    Laptopmobile,
  },
  computed: {
    ...mapGetters("laptops", ["GetLaptops"]),
  },
};
</script>

<style>
</style>