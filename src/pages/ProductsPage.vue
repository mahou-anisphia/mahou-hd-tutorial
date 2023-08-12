<template>
  <h1>Products</h1>
  <ProductList :products="products"></ProductList>
  <!-- Since we want to pass the products variable, we use the colon (:) as the shorthand for v-bind -->
</template>
<script>
import ProductList from "../components/ProductList.vue";
import axios from "axios";

export default {
  name: "ProductPage",
  components: {
    ProductList,
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    const respond = await axios.get("/api/products");
    const products = respond.data;
    this.products = products;
  },
};
</script>
<style scoped>
[v-cloak] {
  display: none;
}
</style>
