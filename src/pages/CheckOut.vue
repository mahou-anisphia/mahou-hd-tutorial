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
        <li class="breadcrumb-item">
          <router-link to="/cart">My Cart</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Checkout</li>
      </ol>
    </nav>

    <h1 class="mb-4">Checkout</h1>
    <div v-if="cartItems.length > 0">
      <ShoppingCartList
        @remove-cart="removeFromCart($event)"
        :cartItems="cartItems"
      ></ShoppingCartList>
      <h1>Total Cost: ${{ calculateTotalCost }}</h1>
      <div class="checkout-form">
        <h2>Shipping Information</h2>
        <form @submit.prevent="processCheckout">
          <div class="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              id="name"
              class="form-control"
              v-model="shippingInfo.name"
              required
            />
          </div>
          <div class="form-group">
            <label for="shippingAddress">Shipping Address:</label>
            <textarea
              id="shippingAddress"
              class="form-control"
              v-model="shippingInfo.address"
              required
            ></textarea>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              class="form-control"
              v-model="shippingInfo.email"
              required
            />
          </div>
          <div class="form-group">
            <label for="paymentMethod">Payment Method:</label>
            <select
              id="paymentMethod"
              class="form-control"
              v-model="selectedPaymentMethod"
              required
            >
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          <button class="checkout-button" type="submit">
            Complete Checkout
          </button>
        </form>
      </div>
    </div>
    <div v-else>You currently have no items in your cart</div>
    <br />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import axios from "axios";
import ShoppingCartList from "@/components/ShoppingCartList.vue";

export default {
  name: "CheckoutPage",
  components: {
    ShoppingCartList,
    NavBar,
  },
  data() {
    return {
      cartItems: [],
      shippingInfo: {
        name: "",
        address: "",
        email: localStorage.getItem("emailToSignIn") || "",
      },
      selectedPaymentMethod: "creditCard",
    };
  },
  async created() {
    if (this.user) {
      const response = await axios.get(`/api/users/${this.user.uid}/cart`);
      this.cartItems = response.data;
    }
  },
  methods: {
    async removeFromCart(productID) {
      const response = await axios.delete(
        `/api/users/${this.user.uid}/cart/${productID}`
      );
      this.cartItems = response.data;
    },
    async processCheckout() {
      alert("Your order is on the way!");
      this.$router.push("/");
    },
  },
  watch: {
    async user(newUser) {
      if (newUser) {
        const cartResponse = await axios.get(`/api/users/${newUser.uid}/cart`);
        this.cartItems = cartResponse.data;
      }
    },
  },
  props: ["user"],
  computed: {
    calculateTotalCost() {
      return this.cartItems.reduce(
        (total, item) => total + parseFloat(item.price.replace("$", "")),
        0
      );
    },
  },
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}

.checkout-form {
  margin-top: 20px;
}
</style>
