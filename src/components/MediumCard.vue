<script>
import { store, getCocktailfromApi } from '../store'

export default {

  data() {
    return {
      store
    }
  },


  mounted() {
    getCocktailfromApi()
  }
}


</script>

<template>
  <div class="container">
    <div class="row row-cols-4 gy-5">
      <div class="col" v-for="(singleCocktail) in store.cocktails">
        <div class="card-container">
          <div class="img-container">
            <img :src="singleCocktail?.strDrinkThumb" alt="">
            <!-- img url chiamata axios. Cambiare poi le dimensioni ed il posizionamento nel CSS -->
          </div>
          <div class="description-container">
            <div class="relatived">
              <div class="cocktail-name-container absoluted">
                <!-- strDrink -->
                {{ singleCocktail?.strDrink }}

              </div>
              <div class="cocktail-alcoholic-container absoluted">
                <!-- strAlcoholic -->
                {{ singleCocktail?.strAlcoholic }}
              </div>
              <div class="cocktail-category-container absoluted">
                <!-- strCategory -->
                {{ singleCocktail?.strCategory }}
              </div>
            </div>
          </div>
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
/*   background-image: url('../assets/placeholder\ img.jpg');
 */  background-size: cover;
  background-position: center;
    img{
      width: 100%;
    }
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