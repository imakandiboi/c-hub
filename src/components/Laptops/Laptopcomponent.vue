<template>
  <div>
    <div class="hidden lg:block">
      <Laptopdesktop />
    </div>
    <div class="block lg:hidden">mobile</div>
  </div>
</template>

<script>
export default {
  name: "Laptopcomponent",
  components: {
    Laptopdesktop: () => import("@/components/Laptops/Laptopdesktop.vue"),
  },
};
</script>

<style>
</style>