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
  <div class="cocktail-preview-main-container"> <!-- :class="{'hidden': isActive}" @toggle-hidden="toggleHidden" -->
    <div class="cocktail-img-container">
      <!-- <img :src="store.strDrinkThumb" alt="" v-if="drink !== null"> -->
      <img :src="store.drinkView.strDrinkThumb" alt="" v-if="store.drinkView !== null">
    </div>

    <div class="cocktail-data-container" v-if="store.drinkView !== null">
      <!-- aggiungere la classe "cocktail-info" e fixare i bordi ai div giusti -->
      <div>
        {{ store.drinkView['strDrink'] }}
        <div>
          <h3>Gli ingredienti</h3>
          <ul>
            <li v-for="ingredient in store.drinkView['ingredienti']">{{ ingredient }}</li>
          </ul>
          <h3>I dosaggi</h3>
          <ul>
            <li v-for="dose in store.drinkView['misure']">{{ dose }}</li>
          </ul>
          <h3>Istruzioni</h3>
          {{ store.drinkView['strInstructionsIT'] }}
        </div>
      </div>
    </div>
  </div>

  <div class="space-divisor"></div>

  </template>

<style scoped lang="scss">
@use "../../scss/partials/mixins" as *;
@use "../../scss/partials/variables" as *;

.space-divisor {
  padding-bottom: 1rem;
}

.cocktail-preview-main-container {
  border: 1px solid $color-text-light; //temporaneo per lo sviluppo
  height: 350px;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: $color-text-light;
}

// .hidden {
//   display: none;
// }

.cocktail-img-container {
  width: 20%;
  height: 100%;
}

.cocktail-data-container {
  width: 75%;
  height: 100%;
  @include flex-col-center-center;
}

.cocktail-info {
  //CONTAINER INFO
  border: 1px solid $color-text-light;
  text-transform: capitalize;
  font-weight: 600;
}
</style>