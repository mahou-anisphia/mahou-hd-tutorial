<template>
  <NavBar></NavBar>
  <div class="page-wrap">
    <RouterView></RouterView>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style></style>
