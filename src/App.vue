<script>
import Home from "./pages/Home.vue"
import Contacts from "./pages/Contacts.vue"
import AboutUs from "./pages/AboutUs.vue"
import Button from "./components/Button.vue"
import Card from "./components/Card.vue"
import LightCard from "./components/LightCard.vue"
import MediumCard from "./components/MediumCard.vue"

export default{
  components:{
    Home,
    Contacts,
    AboutUs,
    Button,
    Card,
    LightCard,
    MediumCard
},
  data(){

  },
  methods:{
    
  }
}
</script>



<template>
  <div class="main-container">
    <router-view></router-view>

    <h1>TEST</h1>
    <Button classe="bg-danger" text="oooo"></Button>

    <div class="placeholder-padding">             <!-- placeholder-->
      <Card></Card>
      <LightCard></LightCard>
      <MediumCard></MediumCard>
    </div>
  </div>
</template>

<style lang="scss">
  @use "../scss/partials/mixins" as *;
  @use "../scss/partials/variables" as *;

  .main-container {
    background-color: $color-section-light;
  }

  .placeholder-padding {                  //placeholder
    padding: 5rem;
    display: flex;
    gap: 5rem;
  }
</style>
