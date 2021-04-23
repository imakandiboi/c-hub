<template>
  <div id="app">
    <header>
      <Header />
      <Navbar />
    </header>
    <main class="bg-gray-100">
      <router-view></router-view>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Navbar,
    Footer,
  },
};
</script>

<style>
</style>
