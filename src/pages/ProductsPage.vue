<template>
  <h1>Products</h1>
  <ProductList :products="products"></ProductList>
  <!-- Since we want to pass the products variable, we use the colon (:) as the shorthand for v-bind -->
</template>
<script>
import { products } from "../temp-data";
import ProductList from "../components/ProductList.vue";

export default {
  name: "ProductPage",
  components: {
    ProductList,
  },
  data() {
    return {
      products,
    };
  },
};
</script>
<style scoped>
[v-cloak] {
  display: none;
}
</style>
