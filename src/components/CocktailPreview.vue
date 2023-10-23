<script>

  export default {
    data() {
      return {
        details: [                      //placeholder in attesa della chiamata Axios
          {name: "name"},
          {mainInfos: [
            {alcoholic: "alcoholic"},
            {category: "category"},
            {iba: "iba"},
            {glass: "glass"},
          ]},
          {ingredients: [
            {ingredient: "ingredient"},
            {measure: "measure"},
          ]},
          {instruction: "instruction"},
        ],
      };
    },
  };
</script>

<template>
  <div class="cocktail-preview-main-container">       <!-- :class="{'hidden': isActive}" @toggle-hidden="toggleHidden" -->
    <div class="cocktail-img-container">

    </div>

    <div class="cocktail-data-container">       <!-- aggiungere la classe "cocktail-info" e fixare i bordi ai div giusti -->
      <div v-for="item in details">
        <div>
          {{ item.name }}
        </div>

        <div v-for="subitem in item.mainInfos">
          <div v-for="value in subitem">
            {{ value }}
          </div>
        </div>

        <div v-for="subitem in item.ingredients">
          <div v-for="value in subitem">
            {{ value }}
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="space-divisor"></div>

  <!-- <MediumCard @click="toggleHidden"></MediumCard>       questo funziona. Quello dentro al componente no-->
</template>

<style scoped lang="scss">
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;

  .space-divisor {
    padding-bottom: 1rem;
  }
  .cocktail-preview-main-container {
    border: 1px solid $color-text-light;                    //temporaneo per lo sviluppo
    height: 350px;
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: $color-text-light;
  }

  .hidden {
    display: none;
  }

  .cocktail-img-container {
    width: 20%;
    height: 100%;
  }

  .cocktail-data-container {
    width: 75%;
    height: 100%;
    @include flex-col-center-center;
  }

  .cocktail-info {                            //CONTAINER INFO
    border: 1px solid $color-text-light;              //perchè non funziona?
    text-transform: capitalize;
    font-weight: 600;
  }
</style>