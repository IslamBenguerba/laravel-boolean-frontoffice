<script>

import MediumCard from './MediumCard.vue';
export default {
    components: {
        MediumCard,
    },
    data() {
        return {

        }
    },
    methods: {
        consol(event){
            console.log(event.target.value)
            if(event.target.value === '1'){
                //si fa una chiamata per tipo o filtriamo per tipo senza fare chiamate axios
                console.log('tipo')
            }
            if(event.target.value === '2'){
                 //si fa una chiamata per tipo o filtriamo per tipo senza fare chiamate axios
                console.log('Categoria')
            }
            if(event.target.value === '3'){
                 //si fa una chiamata per tipo o filtriamo per tipo senza fare chiamate axios
                console.log('A-Z')
            }
        }
    }
}
</script>
<template>
    <div class="container">
        <select class="form-select" aria-label="Default select example" @change="consol($event)">
            <option selected ></option>
            <option value="1"  >Tipo</option>
            <option value="2"  >Categoria</option>
            <option value="3"  >A-Z</option>
            <!-- <option value="2"></option>
            <option value="3">Three</option> -->
        </select>

        <div class="d-flex gap-3">
            <MediumCard></MediumCard>
            <MediumCard></MediumCard>
            <MediumCard></MediumCard>
            <MediumCard></MediumCard>
        </div>
    </div>
</template>
<style>
.form-select{
    background-color: #a9b6c1;
    width: 300px;
}
</style>