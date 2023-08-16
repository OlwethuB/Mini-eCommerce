<template>
  <footer class="footer">
    <div class="footer-content">
      <p class="footer-text">&copy; 2023 Jewelry Shop. All rights reserved.</p>
      <div class="social-icons">
        <a href="#" class="social-icon">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="#" class="social-icon">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="social-icon">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: #f7f7f7;
  padding: 1rem;
  text-align: center;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-text {
  color: #555;
  margin: 0;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  font-size: 1.5rem;
  color: #555;
  text-decoration: none;
  transition: color 0.2s;
}

.social-icon:hover {
  color: #42b983;
}
</style>
