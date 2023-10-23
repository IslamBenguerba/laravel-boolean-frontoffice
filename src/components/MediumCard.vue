<script>
import { store } from '../store';
export default {
  props: {
    titolo: 'ciao'
  },
  data() {
    return {
    }
  },
  methods: {
    toggleDescription() {
      // store.toggleList = true
      //variabile di controllo del CocktailPreview che si trova nello store
      store.toggleList = !store.toggleList;
      store.nomeCocktail = 'come va?'
      return store.toggleList
    }

  }
}
</script>

<template>
  <div class="card-container" @click="toggleDescription()"> <!--  @click="$emit('toggle-hidden')" non funziona -->
    <div class="img-container">
      <!-- img url chiamata axios. Cambiare poi le dimensioni ed il posizionamento nel CSS -->
    </div>
    <div class="description-container">
      <div class="relatived">
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

  </div>
</template>

<style scoped lang="scss">
@use "../../scss/partials/mixins" as *;
@use "../../scss/partials/variables" as *;

.card-container {
  height: 340px;
  width: 300px;
  position: relative;
}

.img-container {
  height: 250px;
  background-image: url('../assets/placeholder\ img.jpg');
  background-size: cover;
  background-position: center;
}

.description-container {
  height: 100px;
  background-color: $color-section-dark;
  color: $color-text-light;
  border: 1px solid $color-text-light;
  position: absolute;
  bottom: 20px;
  left: 15px;
}

.absoluted {
  position: absolute;
  left: 50%;
  translate: (-50%);
}

.relatived {
  height: 100px;
  width: 300px;
  position: relative;
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