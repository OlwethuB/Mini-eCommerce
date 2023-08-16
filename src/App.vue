<template>
  <div id="app">
    <HeaderNavbar />
    <router-view />
    <Footer />
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 50px; /* Add padding for the footer */
}

/* Add any additional styling you want for the App.vue component */
</style>

<script>
import HeaderNavbar from "@/components/HeaderNavbar.vue"; // Import the HeaderNavbar component
import Footer from "@/components/Footer.vue";

export default {
  components: {
    HeaderNavbar, // Include the HeaderNavbar component
    Footer
  }
};
</script>
