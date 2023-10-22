<script>
  export default {
    
  }
</script>

<template>
  <div class="card-container">
    <div class="img-container">
      <!-- img url chiamata axios. Cambiare poi le dimensioni ed il posizionamento nel CSS -->
    </div>
    <div class="description-container">
      <div class="cocktail-name-container absoluted">
        <!-- strDrink -->
        Margarita
      </div>
      <div class="cocktail-alcoholic-container absoluted">
        <!-- strAlcoholic -->
        Alcoholic
      </div>
      <div class="cocktail-category-container absoluted">
        <!-- strCategory -->
        Ordinary Drink
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;
  
  .card-container {
    height: 350px;
    width: 300px;
  }

  .img-container {
    height: 250px;
    background-image: url('../assets/placeholder\ img.jpg');
    background-size: cover;
    background-position: center;
  }

  .description-container {
    height: 100px;
    color: $color-text-light;
    border-right: 1px solid $color-text-light;
    border-bottom: 1px solid $color-text-light;
    border-left: 1px solid $color-text-light;
    position: relative;
  }

  .absoluted {
    position: absolute;
    left: 50%;
    translate: (-50%);
  }

  .cocktail-name-container {
    font-weight: 600;
    font-size: 20px;
    top: 4px;
  }

  .cocktail-alcoholic-container {
    top: 38px;
    font-size: 14px;
  }

  .cocktail-category-container {
    top: 63px;
    font-size: 14px;
  }

</style>