<template>
  <div>
    <div class="w-full shadow-lg bg-white rounded-md p-2 brand">
      <div class="">
        <div class="m-2 w-full h-auto">
          <!--  GRID SECTION FOR LAPTOP BRANDS -->
          <div class="grid grid-cols-3 gap-4">
            <div
              class="rounded overflow-hidden shadow-md bg-gray-100"
              v-for="(laptop, index) in laptops"
              :key="index"
            >
              <!--  GRID SECTION FOR LAPTOP BRANDS -->
              <img class="w-full h-24" src="/mountain.jpg" alt="Mountain" />
              <div class="px-6 py-4">
                <div class="font-bold uppercase text-xl mb-2">
                  {{ laptop.name }}
                </div>
                <p class="text-gray-700 text-base">
                  {{ laptop.descriptions }}
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span
                  class="inline-block bg-gray-900 rounded-md px-8 py-4 text-sm font-semibold text-gray-100 mr-2 mb-2"
                  >{{ laptop.price }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { laptops: Array },
  name: "Brandcategory",
};
</script>

<style scoped>
.brand {
  height: auto;
}
</style>