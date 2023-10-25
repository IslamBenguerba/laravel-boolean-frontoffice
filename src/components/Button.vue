<script>

export default{
    props:
    {
        text :'',
        classe:'',
    },
    data(){
        return{

        }
    },
    methods:{
    }
}
</script>
<template>

<button :class="classe">{{ text }}</button>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;

  button {
    border: none;
    text-transform: uppercase;
    padding: 7px 15px;
    font-weight: 600;
  }

  .dark-button {
    background-color: $color-text-light;
    color: white;
  }

  .light-button {
    background-color: white;
    color: black;
  }
</style>