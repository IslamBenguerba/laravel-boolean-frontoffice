<script>
export default {

    data() {
        return {
            backgroundImageIndex: 0,
            background_images: [
                "src/assets/imgs/img-1-cocktailbar.png",
                "src/assets/imgs/img-5-cocktailbar.png",
                "src/assets/imgs/img-6-cocktailbar.jpg",
            ]
        }

    },

    methods: {

    },
    mounted() {
        // Aggiungi questa parte per cambiare l'immagine di sfondo a intervalli regolari
        setInterval(() => {
            this.backgroundImageIndex++

            if (this.backgroundImageIndex > this.background_images.length - 1) {
                this.backgroundImageIndex = 0;
            }
        }, 2000); // Cambia l'immagine ogni 5 secondi (5000 millisecondi)
    }
}

</script>



<template>

    <div style="color:#c29876;letter-spacing: 6px; position: relative;
">
        <div class="jumbotron-container"
            :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url('../${this.background_images[backgroundImageIndex]}')` }">

        </div>
        <div class="container-title">
                <div class="logo">LOGO</div>
                <h1>TITOLO DEL SITO</h1>
                <p class="text-end">sottotitolo del sito</p>
            </div>
    </div>

</template>


<style lang="scss" scoped>
@import "../../scss/partials/variables";
@import url('https://fonts.cdnfonts.com/css/coestral-personal-use');



.jumbotron-container {
    transition: background-image 1s;
    box-shadow: 10px 6px 8px 5px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0 200px;
    height: 100%;
    min-height: 500px;
    max-height: 600px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7));
    background-position: center;
    background-size: cover;
    opacity: 0.6;
    z-index: -1
}

.container-title{
    position: absolute;
    top: 0;
    right: 50%;
    transform: translate(50%, 50%);

}

.background-image {

    /*         background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url('../assets/imgs/img-1-cocktailbar.png');
*/
    /*         content: '';
*/
    /* background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7));
    opacity: 0.6;
    z-index: -1;
    background-size: cover;
    position: absolute;
    height: 100%;
    min-height: 500px;
    max-height: 600px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; */
}

h1 {
    font-family: 'Coestral Personal Use', sans-serif;
    font-weight: 800;
    font-size: 6rem;
    color: $color-text-light;
}
</style>