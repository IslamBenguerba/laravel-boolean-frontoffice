<script>
import Contacts from "../pages/Contacts.vue"
import AboutUs from "../pages/AboutUs.vue"
import Card from "../components/Card.vue"
import LightCard from "../components/LightCard.vue"
import MediumCard from "../components/MediumCard.vue"
import Jumbotron from "../components/Jumbotron.vue"
import TheNavbar from "../components/TheNavbar.vue"
import Button from "../components/Button.vue"


export default {
    components: {
        Contacts,
        AboutUs,
        TheNavbar,
        Card,
        LightCard,
        MediumCard,
        Jumbotron,
    },


}

</script>



<template>
    <TheNavbar></TheNavbar>
    <Jumbotron></Jumbotron>

    <div class="placeholder-padding"> <!-- placeholder-->
        <MediumCard></MediumCard>
    </div>
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