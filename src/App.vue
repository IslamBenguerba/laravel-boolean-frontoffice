<script>
import Home from "./pages/Home.vue"
import Contacts from "./pages/Contacts.vue"
import AboutUs from "./pages/AboutUs.vue"
import ButtonVue from "./components/Button.vue"

export default{
  components:{
    Home,
    Contacts,
    AboutUs,
    ButtonVue
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
<ButtonVue classe=" bg-danger" text="oooo"></ButtonVue>

</template>

<style lang="scss">

</style>
