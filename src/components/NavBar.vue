<template>
  <div class="nav-bar">
    <RouterLink to="/" class="products-link">
      <div class="logo-wrap">
        <img :src="logo" />
      </div>
    </RouterLink>
    <div class="cart-link">
      <button @click="signOut" v-if="user">Sign Out</button>
      <RouterLink to="/cart">
        <button>Shopping Cart</button>
      </RouterLink>
    </div>
  </div>
</template>
<script>
import logo from "@/assets/logo-hexagon.svg";
import { getAuth, signOut } from "firebase/auth";

export default {
  name: "NavBar",
  data() {
    return {
      logo,
    };
  },
  methods: {
    signOut() {
      const auth = getAuth();
      signOut(auth);
      window.localStorage.removeItem("emailToSignIn");
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
