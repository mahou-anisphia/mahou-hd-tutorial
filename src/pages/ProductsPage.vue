<template>
  <div class="main-menu">
    <NavBar :user="user"></NavBar>
  </div>
  <div class="page-wrap">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Products</li>
        </ol>
      </nav>
      <h1>Products</h1>
    </div>
    <ProductList :products="products"></ProductList>
  </div>
</template>

<script>
import ProductList from "../components/ProductList.vue";
import NavBar from "../components/NavBar.vue";
import axios from "axios";

export default {
  name: "ProductPage",
  components: {
    ProductList,
    NavBar,
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
  props: ["user"],
};
</script>
<style scoped>
[v-cloak] {
  display: none;
}
</style>
