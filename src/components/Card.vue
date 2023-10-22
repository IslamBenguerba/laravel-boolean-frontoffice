<script>
  export default {
    data() {
      return {
        details: [                      //placeholder
          {detail: "test"},
          {detail: "test"},
          {detail: "test"},
          {detail: "test"},
          {detail: "test"},
        ]
      }
    }
  }
</script>

<template>
  <div class="card-container">
    <div class="top-container">
      <div class="img-container">

      </div>
      <div class="details-container">
        <div class="info-container" v-for="(item, index) in details">
          {{ index }} {{ item.detail }}
        </div>
        <div class="hidden-container"></div>
      </div>
    </div>

    <div class="bottom-container">
      <div class="price-container">
        <div class="position-price-container">
          $20 <!-- placeholder -->
        </div>
      </div>
      <div class="instruction-container">

      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;
  
  .card-container {                                 //MACRO-CONTENITORE
    height: 300px;
    width: 350px;
    position: relative;
    border-radius: 50px;
  }

  .top-container {                                  //CONTENITORI SUPERIORI
    width: auto;
    height: 240px;
    display: flex;
  }

  .img-container {
    width: 245px;
    height: 240px;
    background-image: url('../assets/placeholder\ img.jpg');
    background-size: cover;
    background-position: center;
    border-radius: 15px 0 0 0;
  }
  
  .details-container {
    background-color: oklch(38.53% 0.067 235);        //placeholder
    color: white;
    width: 105px;
    height: 240px;
    display: flex;
    flex-direction: column;
    border-radius: 0 15px 0 0;
  }

  .info-container {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
  }

  .hidden-container {
    height: 60px;
  }

  .bottom-container {                               //CONTENITORI INFERIORI
    width: 100%;
    height: 120px;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
  }

  .price-container {
    position: relative;
    width: 70px;
    height: 120px;

    .position-price-container {
      background-color: oklch(38.53% 0.067 235);        //placeholder
      width: 70px;
      height: 60px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0 0 0 15px;
      color: white;
    }
  }

  .instruction-container {
    background-color: $color-text-light;
    width: 280px;
    height: 100%;
    border-radius: 15px 0 15px 0;
  }
</style>