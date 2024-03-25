<template>
  <div class="main-menu">
    <NavBar :user="user"></NavBar>
  </div>
  <div class="page-wrap container">
    <h1>404: Page Not Found</h1>
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "NotFound",
  props: ["user"],
  components: {
    NavBar,
  },
};
</script>
