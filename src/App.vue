<template>
  <div id="app">
    <header>
      <Header />
      <Navbar />
    </header>
    <main class="">
      <router-view></router-view>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Header,
    Navbar,
  },
};
</script>

<style>
</style>
