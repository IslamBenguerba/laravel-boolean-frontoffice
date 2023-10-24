<script>
  import TheMain from '../components/TheMain.vue';

  export default {
    components :{
        TheMain,
    }
  }
</script>

<template>
  <TheMain></TheMain>
</template>

<style lang="scss" scoped>

@use "../scss/partials/mixins" as *;
@use "../scss/partials/variables" as *;


.placeholder-padding {
    //placeholder
    padding: 5rem 0;
    display: flex;
    gap: 5rem;
}

</style>