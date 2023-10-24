<script>
import CocktailPreview from "./CocktailPreview.vue";
import CocktailList from "./CocktailList.vue";
import Slider from "./Slider.vue";

export default {
  components: {
    CocktailPreview,
    CocktailList,
    Slider,
  },
};
</script>

<template>
  <CocktailPreview></CocktailPreview>
  <CocktailList></CocktailList>
  <Slider></Slider>
</template>

<style scoped lang="scss">
@use "../../scss/partials/mixins" as *;
@use "../../scss/partials/variables" as *;
</style>
