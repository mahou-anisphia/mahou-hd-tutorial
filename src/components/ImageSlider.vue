<template>
  <div class="bd-example">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          v-for="(image, index) in images"
          :key="index"
          data-target="#carouselExampleCaptions"
          :data-slide-to="index"
          :class="{ active: index === activeIndex }"
        ></li>
      </ol>
      <transition name="fade" mode="out-in">
        <div :key="activeIndex" class="carousel-inner">
          <div
            v-for="(image, index) in images"
            :key="index"
            :class="['carousel-item', { active: index === activeIndex }]"
          >
            <img :src="image.src" class="d-block w-100" :alt="image.alt" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      images: [
        {
          src: "assets/basil-bottle.webp",
          alt: "Image 1",
          caption: "First slide label",
          description:
            "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        },
        {
          src: "assets/bold-bottle.webp",
          alt: "Image 2",
          caption: "Second slide label",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          src: "assets/chili-bottle.webp",
          alt: "Image 3",
          caption: "Third slide label",
          description:
            "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
        },
      ],
    };
  },
  methods: {
    prevSlide() {
      this.activeIndex =
        (this.activeIndex - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
    },
  },
  mounted() {
    this.slideInterval = setInterval(this.nextSlide, 3000);
  },
  beforeUnmount() {
    clearInterval(this.slideInterval);
  },
};
</script>

<style scoped>
ol {
  list-style-type: none;
}
.button-controls {
  color: black;
}
.carousel-caption,
.carousel-caption p,
.carousel-caption h5 {
  background-color: transparent;
  color: black;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
