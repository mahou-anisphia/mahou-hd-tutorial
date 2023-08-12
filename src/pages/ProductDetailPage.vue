<template>
  <div v-if="product">
    <h1>Product Details</h1>
    <div class="img-wrap">
      <img :src="product.imageUrl" />
    </div>
    <div class="product-details">
      <h1 v-cloak>{{ product.name }}</h1>
      <h3 class="price" v-cloak>{{ product.price }}</h3>
      <button
        @click="addToCart"
        class="add-to-cart"
        v-if="user && !alreadyInCart"
      >
        Add To Cart
      </button>
      <button class="grey-button" v-if="user && alreadyInCart">
        Item is already in cart
      </button>
      <button class="add-to-cart" v-if="!user" @click="signIn">
        Sign in to add to cart
      </button>
    </div>
  </div>
  <div v-else>
    <NotFoundPage></NotFoundPage>
  </div>
</template>
<script>
import NotFoundPage from "./NotFoundPage.vue";
import axios from "axios";
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";

export default {
  name: "ProductDetailPage",
  data() {
    return {
      product: {},

      cart: [],
    };
  },
  methods: {
    async addToCart() {
      await axios.post(`/api/users/${this.user.uid}/cart`, {
        id: this.$route.params.id,
      });
      alert(`Successfully added item to cart!`);
    },
    async signIn() {
      const email = prompt("Enter your E-mail to sign in!");
      const auth = getAuth();
      const authEvent = {
        url: `https://mahou-olive-oil.onrender.com/products/${this.$route.params.id}`,
        handleCodeInApp: true,
      };
      await sendSignInLinkToEmail(auth, email, authEvent);
      alert(`Login link was sent to ${email} email address!`);
      window.localStorage.setItem("emailToSignIn", email);
    },
  },
  components: {
    NotFoundPage,
  },
  async created() {
    const auth = getAuth();
    if (isSignInWithEmailLink(auth, window.location.href)) {
      const email = window.localStorage.getItem("emailToSignIn");
      await signInWithEmailLink(auth, email, window.location.href);
      alert("Logged In!");
      window.localStorage.removeItem("emailToSignIn");
    }

    const respond = await axios.get(`/api/products/${this.$route.params.id}`);
    const product = respond.data;
    this.product = product;

    if (this.user) {
      const cartRes = await axios.get(`/api/users/${this.user.uid}/cart`);
      this.cart = cartRes.data;
    }
  },
  computed: {
    alreadyInCart() {
      return this.cart.some((item) => item.id === this.$route.params.id);
    },
  },
  props: ["user"],
  watch: {
    async user(newUser) {
      if (this.user) {
        const cartRes = await axios.get(`/api/users/${newUser.uid}/cart`);
        this.cart = cartRes.data;
      }
    },
  },
};
</script>
<style>
[v-cloak] {
  display: none;
}
</style>
