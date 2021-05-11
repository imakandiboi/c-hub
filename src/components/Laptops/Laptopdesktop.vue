<template>
  <div>
    <div class="p-4 w-full hero bg-gray-900 text-gray-200">hero</div>

    <div
      class="mx-auto px-4 pt-8 pb-12 grid grid-flow-col grid-cols-8 gap-8 space-x-2 page"
    >
      <div class="col-span-2">
        <laptopcategory />
      </div>
      <div class="col-span-6">
        <Brandcategory />
      </div>
    </div>
  </div>
</template>

<script>
import Laptopcategory from "@/components/Laptops/Laptopcategory.vue";
import Brandcategory from "@/components/Laptops/Brandcategory.vue";
export default {
  name: "Laptopdesktop",
  components: {
    Laptopcategory,
    Brandcategory,
  },
};
</script>

<style scoped>
.hero {
  height: 25vh;
}
.page {
  height: 50%;
}
</style>
