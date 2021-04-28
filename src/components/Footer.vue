<template>
  <div>
    <footer class="w-full p-8 relative h-1/3 bg-gray-900">
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
        <div class="w-2/3 h-96">2</div>
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
  name: "Footer",
  components: {},
};
</script>

<style>
</style>