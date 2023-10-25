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
      drink:null,
      store
    };
  },
};
</script>

<template>
  <div class="cocktail-preview-main-container"> <!-- :class="{'hidden': isActive}" @toggle-hidden="toggleHidden" -->
    <div class="cocktail-img-container">
      <!-- <img :src="store.strDrinkThumb" alt="" v-if="drink !== null"> -->
    </div>

    <div class="cocktail-data-container" v-if="store.drinkView !== null"> <!-- aggiungere la classe "cocktail-info" e fixare i bordi ai div giusti -->
      <div>
        {{ store.drinkView['strDrink'] }}
        <div>

        </div>

        <!-- <div v-for="subitem in item.mainInfos">
          <div v-for="value in subitem">
            {{ value }}
          </div>
        </div> -->

        <!-- <div v-for="subitem in item.ingredients">
          <div v-for="value in subitem">
            {{ value }}
          </div>
        </div> -->

      </div>
    </div>
  </div>

  <div class="space-divisor"></div>

  <!-- <MediumCard @click="toggleHidden"></MediumCard>       questo funziona. Quello dentro al componente no-->
  <!-- import MediumCard from './MediumCard.vue';
import { store } from '../store';
export default {
  components: {
    MediumCard,
  },
  data() {
    return {
      nome: store.nomeCocktail
    };
  },
  methods: {
    toggleHidden() {
      //con questa funzione possiamo usare la variabile nello store comandada da ogni singola card 
      store.toggleList
      console.log(store.toggleList)
      return store.toggleList
    },
    closePreviw() {
      store.toggleList = false
    }
  }
} -->
  <!-- </script> -->

  <!-- <template>
  <div class="cocktail-preview-main-container" v-if="toggleHidden()">
    <button @click="closePreviw()">chiudi</button>
    {{ nome }}
  </div>

  <MediumCard @click="toggleHidden"></MediumCard>       questo funziona. Quello dentro al componente no -->
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
}</style>