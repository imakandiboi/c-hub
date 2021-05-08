<template>
  <div class="bg-gray-900 h-auto">
    <div
      class="flex flex-col text-center items-center text-sm text-gray-300 font-bold pt-2"
    >
      <p class="py-2 w-1/2 h-16">Home</p>
      <p class="py-2 w-1/2 h-16">About</p>
      <p class="py-2 w-1/2 h-16">Services</p>
      <p class="py-2 w-1/2 h-16">links</p>
    </div>
    <div class="mx-auto px-2">
      <div class="mt-8 flex flex-col items-center">
        <div class="sm:w-2/3 text-center py-6">
          <p class="text-sm text-gray-500 font-bold mb-2">
            All rights Reserved © {{ new Date().getFullYear() }} c-hubgadgets
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileFooter",
};
</script>

<style>
</style>