<template>
  <h1>My Cart</h1>
  <div v-if="cartItems.length > 0">
    <ShoppingCartList :cartItems="cartItems"></ShoppingCartList>
    <button class="checkout-button">Proceed To Checkout</button>
  </div>
  <div v-else>You currently have no item in your cart</div>
</template>
<script>
import { cartItems } from "../temp-data";
import ShoppingCartList from "@/components/ShoppingCartList.vue";

export default {
  name: "ShoppingCart",
  components: {
    ShoppingCartList,
  },
  data() {
    return { cartItems };
  },
};
</script>
<style scoped>
[v-cloak] {
  display: none;
}
</style>
