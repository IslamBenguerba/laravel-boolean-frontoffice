<script>
  import Button from './Button.vue';

  export default {
    components: {
      Button,
    },
    data() {
      return {
        links: [
          {link: "home"},
          {link: "chi siamo"},
          {link: "contatti"},
        ]
      }
    }
  }
</script>

<template>
  <div class="navbar-main-container">
    <div class="navbar-links-container">
      <div class="links-container">
        <ul>
          <li v-for="item in links">
            <a href="">
              {{ item.link }}
              <i class="fa-solid fa-angle-down"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="interaction-container">
        <div class="icon-container">
          <a href="">
            <i class="fa-regular fa-envelope"></i>
          </a>
          <a href="">
            <i class="fa-solid fa-magnifying-glass"></i>
          </a>
        </div>
        <Button text="book a table"></Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;

  .navbar-main-container {
    height: 50px;    
  }

  .navbar-links-container {
    @include flex-center-center;
    color: $color-text-light;
    position: relative;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .links-container {                                  //MIDDLE CONTAINER
    @include flex-center-center;
    height: 50px;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 35px;
    padding: 0;
  }

  .interaction-container {                             //RIGHT CONTAINER
    @include flex-center-center;
    gap: 25px;
    position: absolute;
    right: 0;
  }

  .icon-container {
    display: flex;
    gap: 10px;
  }
</style>