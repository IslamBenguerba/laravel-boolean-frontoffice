<script>
import Home from "./pages/Home.vue"
import Contacts from "./pages/Contacts.vue"
import AboutUs from "./pages/AboutUs.vue"
import Button from "./components/Button.vue"
import Card from "./components/Card.vue"

export default{
  components:{
    Home,
    Contacts,
    AboutUs,
    Button,
    Card
},
  data(){

  },
  methods:{
    
  }
}
</script>



<template>
  <router-view></router-view>

  <h1>CAZZO</h1>
  <Button classe="bg-danger" text="oooo"></Button>

  <div class="placeholder-padding">             <!-- placeholder-->
    <Card></Card>
  </div>

</template>

<style lang="scss">
  @use "../scss/partials/mixins" as *;
  @use "../scss/partials/variables" as *;

  .placeholder-padding {                  //placeholder
    padding: 5rem;
  }
</style>
