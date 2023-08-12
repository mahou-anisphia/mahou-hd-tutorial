<template>
  <div v-for="product in cartItems" :key="product.id" class="product-container">
    <img class="product-image" :src="product.imageUrl" />
    <div class="details-wrap">
      <h3 v-cloak>{{ product.name }}</h3>
      <p v-cloak>{{ product.price }}</p>
    </div>
    <button @click="$emit('remove-cart', product.id)" class="remove-button">
      Remove From Cart
    </button>
  </div>
</template>
<script>
export default {
  name: "ProductList",
  props: ["cartItems"],
};
</script>
<style scoped>
[v-cloak] {
  display: none;
}
</style>
