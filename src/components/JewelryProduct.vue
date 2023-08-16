<template>
  <div
    class="jewelry-product"
    @mouseover="hover = true"
    @mouseout="hover = false"
  >
    <img :src="product.imageUrl" alt="Product Image" />
    <div class="product-details" :class="{ 'hovered': hover }">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">${{ product.price }}</p>
      <button class="add-to-cart-button">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JewelryProduct',
  props: ['product'],
  data() {
    return {
      hover: false
    };
  }
}
</script>

<style scoped>
.jewelry-product {
  display: flex;
  border: 1px solid #e0e0e0;
  padding: 1rem;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.jewelry-product:hover {
  transform: translateY(-4px);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.product-image img {
  max-width: 100%;
  height: auto;
}

.product-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 1rem;
}

.product-name {
  font-size: 1.25rem;
  margin: 0;
}

.product-price {
  font-size: 1rem;
  color: #555;
  margin: 0;
}

.add-to-cart-button {
  background-color: #42b983;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.add-to-cart-button:hover {
  background-color: #359f75;
}

.hovered {
  transform: translateY(-4px);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
