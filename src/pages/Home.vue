<script>
import CocktailList from '../components/CocktailList.vue';
import TheMain from '../components/TheMain.vue';
export default {
components :{
    CocktailList,
    TheMain
}

}

</script>



<template>
    <TheMain></TheMain>

    <div class="placeholder-padding"> <!-- placeholder. Da eliminare div e tutte le card-->
    </div>
    <CocktailList></CocktailList>
</template>



<style lang="scss" scoped></style>