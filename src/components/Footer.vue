<template>
  <div>
    <div class="lg:block hidden">
      <DesktopFooter />
    </div>
    <div class="lg:hidden block">
      <MobileFooter />
    </div>
  </div>
</template>

<script>
import DesktopFooter from "@/components/Home/DesktopFooter.vue";
import MobileFooter from "@/components/Home/MobileFooter.vue";

export default {
  components: {
    DesktopFooter,
    MobileFooter,
  },
};
</script>

<style>
</style>