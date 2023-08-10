<template>
  <div class="grid-wrap">
    <div
      v-cloak
      v-for="product in products"
      v-bind:key="product.id"
      class="product-item"
    >
      <img :src="product.imageName" />
      <h3 class="product-name" v-cloak>{{ product.name }}</h3>
      <p class="product-price" v-cloak>{{ product.price }}</p>
      <RouterLink :to="'/products/' + product.id">
        <button>View Details</button>
      </RouterLink>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductList",
  props: ["products"],
};
</script>
<style scoped>
[v-cloak] {
  display: none;
}
</style>
