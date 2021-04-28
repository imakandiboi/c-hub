<template>
  <div>
    <desktopLander />
    <router-view></router-view>
  </div>
</template>
<script>
import DesktopLander from "@/components/Home/DesktopLander";

export default {
  components: {
    DesktopLander,
  },
};
</script>