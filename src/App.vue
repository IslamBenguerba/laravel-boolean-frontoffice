<script>
import Home from "./pages/Home.vue";
import Contacts from "./pages/Contacts.vue";
import AboutUs from "./pages/AboutUs.vue";

import TheHeader from "./components/TheHeader.vue";
import TheMain from "./components/TheMain.vue";

import Card from "./components/Card.vue";
import LightCard from "./components/LightCard.vue";
import MediumCard from "./components/MediumCard.vue";
import Jumbotron from "./components/Jumbotron.vue";
import Slider from "./components/Slider.vue";

export default {
  components: {
    Home,
    Contacts,
    AboutUs,
    TheHeader,
    TheMain,
    Card,
    LightCard,
    MediumCard,
    Jumbotron,
    Slider,
  },
  data() {},
  methods: {},
};
</script>

<template>
  <div class="main-container">
    <router-view></router-view>

    <TheHeader></TheHeader>

    <TheMain></TheMain>

    <TheNavbar></TheNavbar>
    <Jumbotron></Jumbotron>

    <div class="placeholder-padding">
      <!-- placeholder-->
      <Card></Card>
      <LightCard></LightCard>
      <MediumCard></MediumCard>
    </div>
    <Slider></Slider>
  </div>
</template>

<style lang="scss">
@use "../scss/partials/mixins" as *;
@use "../scss/partials/variables" as *;

.main-container {
  background-color: $color-section-light;
  /*   padding: 0 3rem;
 */
}

.placeholder-padding {
  //placeholder
  padding: 5rem 0;
  display: flex;
  gap: 5rem;
}
</style>

<!--
  TO DO LIST:

  IMPORTANTE:
  -aggiungere la rotta delle pagine al tag <a> nella <NavbarLinks>

  MEDIA IMPORTANZA:  
  -<interaction-container> deve sparire e non sovrapporsi a media queries più basse
  -<links-container> non è verticalmente centrato

  NON IMPORTANTE:
  -non scordarsi di scegliere un logo più bello all'interno della <NavbarInfo>

-->
