<script>

export default{
    props:
    {
        text :'',
        classe:''
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

<button class="btn" :class="classe"> Ciaone {{ text }}</button>
</template>

<style scoped>


</style>