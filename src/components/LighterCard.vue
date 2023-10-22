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
      <!-- descrizione chiamata axios -->
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
    background-color: $color-text-light;                //placeholder
    height: 100px;
  }

</style>