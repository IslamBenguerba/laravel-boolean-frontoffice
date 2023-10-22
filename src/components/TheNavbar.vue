<script>
  import NavbarInfo from './NavbarInfo.vue';
  import NavbarLinks from './NavbarLinks.vue';

  export default {
    components: {
      NavbarInfo,
      NavbarLinks,
    }
  }
</script>

<template>
  <NavbarInfo></NavbarInfo>
  <NavbarLinks></NavbarLinks>
  <div class="space-divisor"></div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;

  .space-divisor {
    padding-bottom: 1rem;
  }
</style>