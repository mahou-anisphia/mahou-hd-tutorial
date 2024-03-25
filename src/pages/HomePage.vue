<template>
  <div>
    <div class="banner-section"></div>
    <div class="container">
      <HomeScroll></HomeScroll>
    </div>
  </div>
</template>

<script>
import HomeScroll from "../../components/homescroll.vue";

export default {
  components: {
    HomeScroll,
  },
  name: "HomePage",
};
</script>

<style scoped>
/* Add custom styles for the component if needed */
.banner-section {
  background: url("../../assets/cover_img.png") center/cover no-repeat;
  background-size: cover;
  min-height: 80vh;
}

/* Use Bootstrap's utility classes for responsiveness */
@media (max-width: 768px) {
  .banner-section {
    min-height: 50vh;
    background-size: contain; /* Adjust as needed for your design */
  }
}
/* Add more styles as needed */
</style>
