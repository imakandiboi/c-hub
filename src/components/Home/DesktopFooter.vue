<template>
  <div>
    <footer
      class="w-full p-8 relative h-1/3 bg-gray-900 border-t-8 border-green-600"
    >
      <div class="m-4 gap-8 flex text-gray-100 block justify-around">
        <div class="w-1/3 p-2 h-96">
          <div class="flex flex-col mx-2 gap-y-4">
            <div class="h-48 px-8">
              <h1 class="text-4xl justify-items-start text-gray-200">
                C-Hub
                <span class="text-sm font-bold text-green-500 uppercase"
                  >phones | accersories | gadgets</span
                >
              </h1>
            </div>
            <div class="h-24 px-8">social links</div>
          </div>
        </div>
        <div class="w-2/3 h-96 p-4">
          <div class="grid grid-cols-3 gap-4 text-left justify-items-center">
            <div class="grid grid-rows-3">
              <p
                class="w-64 h-16 p-2 mb-4 font-sans font-bold capitalize text-gray-100"
              >
                About
              </p>
              <p class="w-64 h-16 p-2">Nigeria</p>
              <p class="w-64 h-16 p-2">United States</p>
              <p class="w-64 h-16 p-2">United Kingdom</p>
            </div>
            <div class="grid grid-rows-3">
              <p
                class="w-64 h-16 p-2 mb-4 font-sans font-bold capitalize text-gray-100"
              >
                Contact Address
              </p>
              <p class="w-64 h-16 p-2">Email</p>
              <p class="w-64 h-16 p-2">Phone</p>
              <p class="w-64 h-16 p-2">Address</p>
            </div>
            <div class="grid grid-rows-3">
              <p
                class="w-64 h-16 p-2 mb-4 font-sans font-bold capitalize text-gray-100"
              >
                Affiliates
              </p>
              <p class="w-64 h-16 p-2">Blog</p>
              <p class="w-64 h-16 p-2">Developers</p>
              <p class="w-64 h-16 p-2">Team</p>
            </div>
          </div>
        </div>
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
    </footer>
  </div>
</template>

<script>
export default {
  name: "DesktopFooter",
  components: {},
};
</script>

<style scoped>
</style>