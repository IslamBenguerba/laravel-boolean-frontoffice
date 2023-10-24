<script>
  import CocktailPreview from './CocktailPreview.vue';
  import CocktailList from './CocktailList.vue';

  export default {
    components: {
      CocktailPreview,
      CocktailList,
    }
  }
</script>

<template>
  <CocktailPreview></CocktailPreview>
  <CocktailList></CocktailList>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;
</style>