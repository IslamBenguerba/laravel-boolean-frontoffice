<script>
import MediumCard from './MediumCard.vue';
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
}
</script>

<template>
  <div class="cocktail-preview-main-container" v-if="toggleHidden()">
    <button @click="closePreviw()">chiudi</button>
    {{ nome }}
  </div>

  <!-- <MediumCard @click="toggleHidden"></MediumCard>       questo funziona. Quello dentro al componente no -->
</template>

<style scoped lang="scss">
@use "../../scss/partials/mixins" as *;
@use "../../scss/partials/variables" as *;

.cocktail-preview-main-container {
  border: 1px solid black; //temporaneo per lo sviluppo
  height: 350px;
}

.hidden {
  display: none;
}
</style>