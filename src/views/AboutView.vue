<template>
  <div class="about">
    <div class="about-content">
      <h1>About Us</h1>
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
      />
      <img
        src="https://i.postimg.cc/k4R2sHdK/download-1.png"
        alt="About Image 2"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
}
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px 0;
  background-color: #f8f8f8;
}

.about-content {
  text-align: center;
}

.about-content h1 {
  font-size: 36px;
  margin-bottom: 16px;
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

.about-images img {
  max-width: 100%;
  height: auto;
}
</style>
