<script>
  export default {

  }
</script>

<template>
  <div class="main-container">
    <div class="position-container">
      <div class="symbol-container">
        <i class="fa-solid fa-location-dot fa-2x"></i>
      </div>
    </div>

    <div class="logo-container">

    </div>

    <div class="working-hours-container">

    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;

  .main-container {
    height: 75px;
    border-bottom: 1px solid $color-text-light;
  }
</style>