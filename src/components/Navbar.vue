/*/*Navbar for desktop view */
*/
<template>
  <div
    class="py-4 px-4 shadow-lg fixed z-50 top-24 flex w-full h-18 justify-start bg-gray-200 lg:block hidden"
  >
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

      <router-link :to="{ name: 'SmartPhones' }">
        <h3
          class="w-32 h-12 text-center justify-center py-2 hover:text-green-500 px-2"
        >
          smartphone
        </h3>
      </router-link>

      <router-link :to="{ name: 'Consoles' }">
        <h3
          class="w-32 h-12 text-center justify-center py-2 hover:text-green-500 px-2"
        >
          console
        </h3>
      </router-link>
      <router-link :to="{ name: 'Games' }">
        <h3
          class="w-32 h-12 text-center justify-center py-2 hover:text-green-500 px-2"
        >
          games
        </h3>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>
