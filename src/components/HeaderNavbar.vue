<template>
  <nav class="navbar">
    <ul>
      <li><a @click="scrollToSection('home')">Home</a></li>
      <li><a @click="scrollToSection('about')">About</a></li>
      <li><a @click="scrollToSection('products')">Products</a></li>
      <li><a @click="scrollToSection('contact')">Contact</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #42b983;
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.navbar ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar li {
  margin: 0 15px;
}

.navbar a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.3s ease;
}

.navbar a:hover {
  opacity: 0.8;
}
</style>

<script>
export default {
  name: 'HeaderNavbar',
  methods: {
    scrollToSection(sectionId) {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>
