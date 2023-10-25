<script>
import { store } from '../store';
export default {
  data() {
    return {
      details: [                      //placeholder in attesa della chiamata Axios
        { name: "name" },
        {
          mainInfos: [
            { alcoholic: "alcoholic" },
            { category: "category" },
            { iba: "iba" },
            { glass: "glass" },
          ]
        },
        {
          ingredients: [
            { ingredient: "ingredient" },
            { measure: "measure" },
          ]
        },
        { instruction: "instruction" },
      ],
      // drink: null,
      store
    };
  },
};
</script>

<template>
  <div class="fluid-container">
    <div class="cocktail-preview-main-container classy-style" v-if="store.drinkView !== null">
      <div class="cocktail-img-container classy-style">
        <img class="fit-img" :src="store.drinkView.strDrinkThumb" alt="">
      </div>

      <div class="cocktail-data-container classy-style">
        <div class="row-container">
          <div class="classy-style name-label">{{ store.drinkView['strDrink'] }}</div> <!-- NOME -->
        </div>

        <div class="row-container"> <!-- CATEGORIE -->
          <div class="classy-style info-label">{{store.drinkView['strAlcoholic']}} </div>
          <div class="classy-style info-label">{{ store.drinkView['strGlass'] }}</div>
          <div class="classy-style info-label">{{ store.drinkView['strIBA'] }}</div>
        </div>

        <div class="row-container"> <!-- INGREDIENTI -->
          <div class="classy-style info-label" v-for="ingredient in store.drinkView['ingredienti']">{{ ingredient }}</div>
          <!--ciclo for per richiamare gli ingredienti non null-->
        </div>
        <div class="row-container">
          <div class="classy-style info-label" v-for="dose in store.drinkView['misure']">{{ dose }}</div>
          <!--ciclo for per richiamare le measures non null-->
        </div>

        <div class="row-container instruction-container"> <!-- ISTRUZIONI -->
          <div class="just-bordered instruction-label">{{ store.drinkView['strInstructionsIT'] }}</div>
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

.fit-img{
  height: 100%;
  width: 100%;
}
</style>
