<template>
  <div class="home">
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo">
          <img src="logo.png" alt="Logo" />
          <span>Jewelry Store</span>
        </div>
        <div class="menu-icon" @click="toggleMenu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div>
      <div class="nav-links" :class="{ active: isMenuOpen }">
        <a @click="scrollToSection('home')">Home</a>
        <a @click="scrollToSection('about')">About</a>
        <a @click="scrollToSection('products')">Products</a>
        <a @click="scrollToSection('contact')">Contact</a>
      </div>
    </nav>

    <section id="home" class="hero-section">
      <h1>Welcome to Our Jewelry Store</h1>
      <p>Discover Exquisite Jewelry Collections</p>
      <a @click="scrollToSection('products')" class="btn">Explore Now</a>
    </section>

    <section id="about" class="about-section">
      <div class="about-content">
        <h2>About Us</h2>
        <p>Welcome to our Jewelry Store!</p>
        <p>
          We are passionate about providing you with the finest jewelry pieces
          that reflect your unique style and taste.
        </p>
        <p>
          Explore our wide range of exquisite jewelry collections and find the
          perfect pieces that resonate with you.
        </p>
      </div>
      <div class="about-images">
        <img
          src="https://i.postimg.cc/k4R2sHdK/download-1.png"
          alt="About Image 1"
          class="about-image"
        />
        <img
          src="https://i.postimg.cc/k4R2sHdK/download-1.png"
          alt="About Image 2"
          class="about-image"
        />
      </div>
    </section>

    <section id="products" class="products-section">
      <h2>Our Products</h2>
      <div class="jewelry-products">
        <JewelryProduct
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>

    <section id="contact" class="contact-section">
      <h2>Contact Us</h2>
      <div class="contact-form">
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" class="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import JewelryProduct from "@/components/JewelryProduct.vue";

export default {
  name: 'HomeView',
  components: {
    JewelryProduct
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Elegant Diamond Necklace",
          price: 699,
          imageUrl: "https://i.postimg.cc/k4R2sHdK/download-1.png"
        },
        {
          id: 2,
          name: "Classic Pearl Earrings",
          price: 149,
          imageUrl: "https://i.postimg.cc/k4R2sHdK/download-1.png"
        },
        {
          id: 3,
          name: "Charming Sapphire Ring",
          price: 549,
          imageUrl: "https://i.postimg.cc/k4R2sHdK/download-1.png"
        },
        // Add more product data here
      ],
      isMenuOpen: false
    };
  },
  methods: {
    scrollToSection(sectionId) {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped>
/* Reset margin and padding for body and other elements */
body,
h1,
h2,
h3,
p,
ul,
li {
  margin: 0;
  padding: 0;
}

/* Use a flexible box layout for the whole page */
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f8f8f8;
}

/* Navbar styling */
.navbar {
  background-color: #42b983;
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.logo img {
  width: 30px;
  height: auto;
  margin-right: 10px;
}

.logo span {
  font-weight: bold;
}

.menu-icon {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.menu-icon div {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 3px 0;
}

.nav-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  transition: max-height 0.5s ease-out;
  overflow: hidden;
  max-height: 0;
}

.nav-links.active {
  max-height: 500px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #2b7d54;
}

/* Hero section styling */
.hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 0 20px;
  text-align: center;
  background-color: #42b983;
  color: white;
}

.hero-section h1 {
  font-size: 36px;
  margin-bottom: 16px;
}

.hero-section p {
  font-size: 18px;
  margin-bottom: 32px;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  text-align: center;
  color: white;
  background-color: #379e70;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #2b7d54;
}

/* About section styling */
.about-section {
  padding: 50px 20px;
  text-align: center;
  background-color: #f8f8f8;
}

.about-content {
  text-align: center;
}

.about-content h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.about-content p {
  font-size: 18px;
  margin-bottom: 20px;
}

.about-images {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.about-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Products section styling */
.products-section {
  padding: 50px 20px;
  text-align: center;
  background-color: white;
}

.jewelry-products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

/* Contact section styling */
.contact-section {
  padding: 50px 20px;
  text-align: center;
  background-color: #f8f8f8;
}

.contact-section h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.contact-section p {
  font-size: 18px;
  line-height: 1.6;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 18px;
  margin-bottom: 8px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.submit-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;
}

.submit-button:hover {
  background-color: #359f75;
}

/* Add responsive styles for smaller screens */
@media (max-width: 768px) {
  .menu-icon {
    display: flex;
  }

  .nav-links {
    flex-direction: column;
    max-height: 1000px;
  }

  .nav-links.active {
    max-height: 1000px;
  }

  .nav-links a {
    margin: 10px 0;
  }

  .hero-section h1 {
    font-size: 28px;
  }

  .hero-section p {
    font-size: 16px;
  }

  .about-content h2 {
    font-size: 24px;
  }

  .about-content p {
    font-size: 16px;
  }

  .jewelry-products {
    gap: 10px;
  }

  .about-image {
    max-width: 100%;
    height: auto;
  }

  .contact-form {
    max-width: 100%;
    padding: 0 20px;
  }

  .form-group label {
    font-size: 16px;
  }

  input,
  textarea {
    font-size: 14px;
  }

  .submit-button {
    font-size: 14px;
    padding: 10px 20px;
  }
}
</style>
