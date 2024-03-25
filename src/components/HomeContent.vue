<template>
  <div class="scroll-animations">
    <section class="section-text" ref="sectionText">
      <p>
        Delve into the world of culinary excellence with our exceptional
        collection of premium olive oils sourced from the corners of the globe.
        Guided by an unwavering commitment to quality and authenticity, we are
        dedicated to bringing you the epitome of olive oils for your gastronomic
        adventures.
      </p>
    </section>

    <section class="home-page-section">
      <div class="container">
        <h1>About Us</h1>
        <br />
        <div class="row">
          <div class="col-md-6">
            <img
              src="../assets/faci_img.jpg"
              alt="Olive Grove Store"
              class="img-fluid"
            />
          </div>
          <div class="col-md-6">
            <p>
              Embark on a journey of taste and tradition at The Olive Grove. We
              take immense pride in curating a diverse spectrum of olive oils,
              each a symphony of distinctive flavors and inherent health
              benefits. Our unyielding pursuit of excellence ensures that you
              not only taste but also feel the essence of authentic olive oil
              like never before.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="home-page-section">
      <div class="container">
        <h1>Explore Our Selection</h1>
        <br />
        <div class="row">
          <div class="col-md-4 order-md-2">
            <ImageSlider />
          </div>
          <div class="col-md-8 order-md-1">
            <p>
              Immerse yourself in our meticulously handpicked assortment of
              single-origin and artfully infused olive oils. Elevate your
              culinary creations with the opulent flavors and tantalizing aromas
              that only the most exquisite olive oils can bestow upon your
              dishes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="home-page-section">
      <div class="container">
        <HomeChart></HomeChart>
      </div>
    </section>
  </div>
</template>

<script>
import ScrollMagic from "scrollmagic";
import HomeChart from "./HomeChart.vue";
import ImageSlider from "./ImageSlider.vue";

export default {
  components: {
    HomeChart,
    ImageSlider,
  },
  name: "OliveOilShopAnimations",
  mounted() {
    const controller = new ScrollMagic.Controller();
    const sectionText = this.$refs.sectionText;
    const sectionPlaceholders = this.$el.querySelectorAll(".home-page-section");

    new ScrollMagic.Scene({
      triggerElement: sectionText,
      triggerHook: 0.8,
    })
      .setClassToggle(sectionText, "fade-in")
      .addTo(controller);

    sectionPlaceholders.forEach((sectionPlaceholder) => {
      new ScrollMagic.Scene({
        triggerElement: sectionPlaceholder,
        triggerHook: 0.8,
      })
        .setClassToggle(sectionPlaceholder, "fade-in")
        .addTo(controller);
    });
  },
};
</script>

<style>
.section-text,
.home-page-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s, transform 1s;
}

.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.home-page-section {
  padding: 80px 0;
}

.home-page-section img {
  max-width: 100%;
}
</style>
