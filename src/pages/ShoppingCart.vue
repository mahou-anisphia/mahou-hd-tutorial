<template>
  <div class="main-menu">
    <NavBar :user="user"></NavBar>
  </div>
  <div class="page-wrap container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item">
          <router-link to="/products">Products</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">My Cart</li>
      </ol>
    </nav>

    <h1>My Cart</h1>
    <div v-if="cartItems.length > 0">
      <ShoppingCartList
        @remove-cart="removeFromCart($event)"
        :cartItems="cartItems"
      ></ShoppingCartList>
      <RouterLink to="/cart/checkout"
        ><button class="checkout-button">
          Proceed To Checkout
        </button></RouterLink
      >
    </div>
    <div v-else>You currently have no item in your cart</div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import axios from "axios";
import ShoppingCartList from "@/components/ShoppingCartList.vue";

export default {
  name: "ShoppingCart",
  components: {
    ShoppingCartList,
    NavBar,
  },
  data() {
    return { cartItems: [] };
  },
  async created() {
    if (this.user) {
      const respond = await axios.get(`/api/users/${this.user.uid}/cart`);
      const cart = respond.data;
      this.cartItems = cart;
    }
  },
  methods: {
    async removeFromCart(productID) {
      const respond = await axios.delete(
        `/api/users/${this.user.uid}/cart/${productID}`
      );
      const updatedCart = respond.data;
      this.cartItems = updatedCart;
    },
  },
  watch: {
    async user(newUser) {
      if (this.user) {
        const cartRes = await axios.get(`/api/users/${newUser.uid}/cart`);
        this.cart = cartRes.data;
      }
    },
  },
  props: ["user"],
};
</script>
<style scoped>
[v-cloak] {
  display: none;
}
</style>
