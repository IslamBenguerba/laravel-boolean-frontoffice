<script>
  import CocktailPreview from './CocktailPreview.vue';

  export default {
    components: {
      CocktailPreview,
    }
  }
</script>

<template>
  <CocktailPreview></CocktailPreview>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;
</style>