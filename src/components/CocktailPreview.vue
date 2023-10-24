<script>

  export default {
    data() {
      return {

      };
    },
  };
</script>

<template>
  <div class="fluid-container">
    <div class="cocktail-preview-main-container classy-style" >
      <div class="cocktail-img-container classy-style">

      </div>

      <div class="cocktail-data-container classy-style">
        <div class="row-container">
          <div class="classy-style name-label">strDrink</div>            <!-- NOME -->
        </div>

        <div class="row-container">                        <!-- CATEGORIE -->
          <div class="classy-style info-label">strAlcoholic</div>
          <div class="classy-style info-label">strCategory</div>
          <div class="classy-style info-label">strIBA</div>
          <div class="classy-style info-label">strGlass</div>
        </div>

        <div class="row-container">                        <!-- INGREDIENTI -->
          <div class="classy-style info-label">strIngredient1</div>
          <!--ciclo for per richiamare gli ingredienti non null-->
        </div>
        <div class="row-container">
          <div class="classy-style info-label">strMeasure1</div>
          <!--ciclo for per richiamare le measures non null-->
        </div>
        
        <div class="row-container instruction-container">                   <!-- ISTRUZIONI -->
          <div class="just-bordered instruction-label">strInstruction</div>
        </div>
      </div>
    </div>
  </div>

  <div class="big-space-divisor"></div>
</template>

<style scoped lang="scss">
@use "../../scss/partials/mixins" as *;
@use "../../scss/partials/variables" as *;

  .space-divisor {
    padding-bottom: 1rem;
  }

  .classy-style {                                       //GENERAL STYLE
    border: 1px solid $color-text-light;
    text-transform: capitalize;
    font-weight: 600;
  }

  .just-bordered {
    border: 1px solid $color-text-light;
    font-weight: 500;
  }

  .fluid-container {                                    //MAIN CONTAINERS
    @include flex-center-center;
  }

  .row-container {
    display: flex;
    gap: 7px;
  }

  .cocktail-preview-main-container {
    width: 1500px;
    height: 350px;
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: $color-text-light;
    @include flex-between-center;
  }

  .cocktail-img-container {
    width: 20%;
    height: 100%;
  }

  .cocktail-data-container {
    width: 78%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem;
  }

  .instruction-container {
    width: 100%;
  }

  .name-label,
  .info-label {                                     //SINGLE LABEL
    width: 150px;
    text-align: center;
  }

  .instruction-label {
    height: 100px;
    width: 100%;
    padding: 2px 10px;
  }
</style>