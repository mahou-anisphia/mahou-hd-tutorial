<template>
  <div v-if="product">
    <h1>Product Details</h1>
    <div class="img-wrap">
      <img :src="product.imageName" />
    </div>
    <div class="product-details">
      <h1 v-cloak>{{ product.name }}</h1>
      <h3 class="price" v-cloak>{{ product.price }}</h3>
      <button class="add-to-cart">Add To Cart</button>
    </div>
  </div>
  <div v-else>
    <NotFoundPage></NotFoundPage>
  </div>
</template>
<script>
import { products } from "../temp-data";
import NotFoundPage from "./NotFoundPage.vue";
export default {
  name: "ProductDetailPage",
  data() {
    return {
      product: products.find((product) => product.id === this.$route.params.id),
    };
  },
  components: {
    NotFoundPage,
  },
};
</script>
<style>
[v-cloak] {
  display: none;
}
</style>
