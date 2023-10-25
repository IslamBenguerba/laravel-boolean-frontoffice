<script>
  export default {

  }
</script>

<template>
  <div class="navbar-main-container">
    <div class="info-container">
      <div class="symbol-container">
        <i class="fa-solid fa-location-dot fa-2x"></i>
      </div>
      <div class="text-container">
        <div class="description-container">
          We are Here:
        </div>
        <div class="data-container">
          Mazara del Vallo, 91026 Italy
        </div>
      </div>
    </div>

    <div class="logo-container">
      <div class="logo-box"></div>
      <div class="name-container">

      </div>
    </div>

    <div class="info-container">      
      <div class="text-container">
        <div class="description-container text-right-aligned">
          Working Hours:
        </div>
        <div class="data-container text-right-aligned">
          Mon - Sun: un po' a caso
        </div>
      </div>
      <div class="symbol-container">
        <i class="fa-solid fa-clock fa-2x"></i>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;

  .navbar-main-container {
    @include flex-between-center;
    height: 95px;
    border-bottom: 1px solid $color-text-light;
    color: $color-text-light;
  }

  .info-container {                                                         //LEFT & RIGHT CONTAINERS
    @include flex-center-center;
    gap: 1rem;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .description-container {
    font-weight: 600;
    font-size: 20px;
  }

  .text-right-aligned {
    text-align: end;
  }

  .logo-container {                                                         //MIDDLE CONTEINER
    @include flex-center-center;
  }

  .logo-box {
    height: 75px;
    aspect-ratio: 1/1;
    background-image: url('../assets/placeholder-logo.svg')     //placeholer
  }

  .name-container {
    font-size: 36px;
    font-weight: 600;
  }
</style>