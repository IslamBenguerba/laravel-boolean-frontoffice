<script>
import Home from "./pages/Home.vue"
import Contacts from "./pages/Contacts.vue"
import AboutUs from "./pages/AboutUs.vue"

import TheHeader from "./components/TheHeader.vue"
import TheFooter from "./components/TheFooter.vue"

import Button from "./components/Button.vue"

export default {
  components: {
    Home,
    Contacts,
    AboutUs,
    TheHeader,
    Button,
    TheFooter
  },
}
</script>

<template>
  <div class="main-container">
    <TheHeader></TheHeader>
    <div class="big-space-divisor"></div>

    <router-view></router-view>
    <div class="big-space-divisor"></div>

    <TheFooter></TheFooter>    
  </div>
</template>

<style lang="scss">
@use "../scss/partials/mixins" as *;
@use "../scss/partials/variables" as *;

.main-container {
  background-color: $color-section-light;
  padding: 0 3rem;
}

.big-space-divisor {
  padding-bottom: 3rem;
}

.space-divisor {
  padding-bottom: 1rem;
}
</style>

<!--
  TO DO LIST:

  IMPORTANTE:
  -TheFooter

  MEDIA IMPORTANZA:  
  -<interaction-container> deve sparire e non sovrapporsi a media queries più basse
  -<links-container> non è verticalmente centrato

  NON IMPORTANTE:
  -non scordarsi di scegliere un logo più bello all'interno della <NavbarInfo>

-->