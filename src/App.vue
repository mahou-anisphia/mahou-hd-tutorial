<template>
  <div>
    <RouterView :user="user"></RouterView>
  </div>
  <PageFooter></PageFooter>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.css";
import PageFooter from "./components/PageFooter.vue";

export default {
  name: "App",
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
  components: {
    PageFooter,
  },
};
</script>

<style>
.main-menu {
  margin-bottom: 75px;
}
@media (max-width: 768px) {
  .main-menu {
    margin-bottom: 55px;
  }
}
</style>
