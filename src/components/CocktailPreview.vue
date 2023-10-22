<script>
  import MediumCard from './MediumCard.vue';

  export default {
    components: {
      MediumCard,
    },
    data() {
      return {
        isActive: true,
      };
    },
    methods: {
      toggleHidden() {
        this.isActive = !this.isActive;
      }
    }
  }
</script>

<template>
  <div class="cocktail-preview-main-container" :class="{'hidden': isActive}" @toggle-hidden="toggleHidden">

  </div>

  <MediumCard @click="toggleHidden"></MediumCard>       <!-- questo funziona. Quello dentro al componente no-->
</template>

<style scoped lang="scss">
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;

  .cocktail-preview-main-container {
    border: 1px solid black;                    //temporaneo per lo sviluppo
    height: 350px;
  }

  .hidden {
    display: none;
  }
</style>