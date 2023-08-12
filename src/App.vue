<template>
  <NavBar :user="user"></NavBar>
  <div class="page-wrap">
    <RouterView :user="user"></RouterView>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.css";

export default {
  name: "App",
  components: {
    NavBar,
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
  },
  data() {
    return {
      user: null,
    };
  },
};
</script>

<style></style>
