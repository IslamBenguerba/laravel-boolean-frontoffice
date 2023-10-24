<script>
import TheNavbar from "./TheNavbar.vue"
import Jumbotron from "./Jumbotron.vue";
export default {
  components:{
    TheNavbar,
    Jumbotron
  },
}
</script>



<template>
    <TheNavbar></TheNavbar>
    <Jumbotron></Jumbotron>
</template>

<style lang="scss">
  @use "../scss/partials/mixins" as *;
  @use "../scss/partials/variables" as *;
</style>