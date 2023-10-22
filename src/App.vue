<script>
import Home from "./pages/Home.vue"
import Contacts from "./pages/Contacts.vue"
import AboutUs from "./pages/AboutUs.vue"

import TheNavbar from "./components/TheNavbar.vue"

import Button from "./components/Button.vue"
import Card from "./components/Card.vue"
import LightCard from "./components/LightCard.vue"
import MediumCard from "./components/MediumCard.vue"

export default{
  components:{
    Home,
    Contacts,
    AboutUs,
    TheNavbar,
    Button,
    Card,
    LightCard,
    MediumCard,
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

    <TheNavbar></TheNavbar>

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
    padding: 0 3rem;
  }

  .placeholder-padding {                  //placeholder
    padding: 5rem 0;
    display: flex;
    gap: 5rem;
  }

  .placeholder-small-padding {
    padding: 1rem 0;
  }
</style>

<!--
  TO DO LIST:

  IMPORTANTE:
  -non funziona il <Button> nel <NavbarLinks>
  -aggiungere la rotta delle pagine al tag <a> nella <NavbarLinks>

  MEDIA IMPORTANZA:  
  -<interaction-container> deve sparire e non sovrapporsi a media queries più basse
  -<links-container> non è verticalmente centrato

  NON IMPORTANTE:
  -non scordarsi di scegliere un logo più bello all'interno della <NavbarInfo>

-->