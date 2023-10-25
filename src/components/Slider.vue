<script>
import axios from "axios";

export default {
  data() {
    return {
      slides: [],
      currentIndex: 0,
    };
  },
  methods: {
    created() {
      axios
        .get("http://127.0.0.1:8000/api/cocktails")
        .then((response) => {
          this.slides = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
  },
  mounted() {
    this.created();
    setInterval(this.nextSlide, 3000);
  },
};
</script>

<template>
  <div class="container py-5">
    <div class="slider-container">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slide"
        :class="{ transparent: index < 2 || index >= slides.length - 2 }"
        :style="{
          backgroundImage: `url(${slide.strDrinkThumb})`,
          transform: `translateX(-${currentIndex * 100}%)`,
        }"
      >
        <div class="slide-content p-3 text-center">
          <h2 class="py-2 px-5">{{ slide.strDrink }}</h2>
          <!-- <p>{{ slide.strInstructions }}</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider-container {
  height: 500px;
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  flex: 0 0 20%;
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  // transition: opacity 0.5s ease-in-out;
}

// .transparent {
//   opacity: 0.2;
// }

h2 {
  font-size: 3rem;
  color: #0f1d20;
  background-color: #cfc3b3;
}
</style>
