/*/*Navbar for desktop view */
*/
<template>
  <div class="py-4 px-4 w-full h-24 justify-start bg-gray-200 lg:block hidden">
    <div
      class="flex block gap-x-8 px-20 uppercase text-sm font-bold text-gray-900 items-center"
    >
      <router-link :to="{ name: 'Home' }">
        <h3
          class="w-32 h-12 text-center justify-center py-2 hover:text-green-500 px-2"
        >
          home
        </h3>
      </router-link>

      <router-link :to="{ name: 'Laptops' }">
        <h3
          class="w-32 h-12 text-center justify-center py-2 hover:text-green-500 px-2"
        >
          laptops
        </h3>
      </router-link>

      <h3
        class="w-32 h-12 text-center justify-center py-2 hover:text-green-500 px-2"
      >
        smartphone
      </h3>
      <h3
        class="w-32 h-12 text-center justify-center py-2 hover:text-green-500 px-2"
      >
        console
      </h3>
      <h3
        class="w-32 h-12 text-center justify-center py-2 hover:text-green-500 px-2"
      >
        accersories
      </h3>
      <h3
        class="w-32 h-12 text-center justify-center py-2 hover:text-green-500 px-2"
      >
        accersories
      </h3>
      <h3
        class="w-32 h-12 text-center justify-center py-2 hover:text-green-500 px-2"
      >
        accersories
      </h3>
      <h3
        class="w-32 h-12 text-center justify-center py-2 hover:text-green-500 px-2"
      >
        accersories
      </h3>
      <h3
        class="w-32 h-12 text-center justify-center py-2 hover:text-green-500 px-2"
      >
        accersories
      </h3>
      <h3
        class="w-32 h-12 text-center justify-center py-2 hover:text-green-500 px-2"
      >
        accersories
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>
