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
        setInterval(() => {
            this.backgroundImageIndex++

            if (this.backgroundImageIndex > this.background_images.length - 1) {
                this.backgroundImageIndex = 0;
            }
        }, 5000); 
    }
}

</script>



<template>

    <div style="color:#c29876;letter-spacing: 6px; position: relative;
">
        <div class="jumbotron-container"
            :style="{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url('../${this.background_images[backgroundImageIndex]}')`,
                opacity: 0.7,
                transition: 'opacity 2s'
}">

        </div>
        <div class="container-title">
                <div class="logo"> <span class="apici">&ldquo;</span>Sorseggia il tuo sogno</div>
                <h1>COCKTAIL BAR</h1>
                <p class="text-end"> ogni cocktail è una storia da gustare. <span class="apici">&rdquo;</span> <br>
                    <span class="chat-gpt">
                        - Chat Gpt
                </span></p>

            </div>
    </div>

</template>


<style lang="scss" scoped>
@import "../../scss/partials/variables";
@import url('https://fonts.cdnfonts.com/css/coestral-personal-use');



.jumbotron-container {
    margin: 0 -3rem;
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
    z-index: -1
}

.container-title{
    width: 50%;
    position: absolute;
    top: 0;
    right: 50%;
    transform: translate(50%, 50%);

}


h1 {
    padding-left: 50px;
    font-family: 'Coestral Personal Use', sans-serif;
    font-weight: 800;
    font-size: 6rem;
    color: $color-text-light;
}


.apici{
    font-size: 2rem;
}

.chat-gpt{
    letter-spacing: 0;
    font-size: 0.8rem;

}

@media screen and (max-width:1418px) {
    .container-title p{
        display: none;
    }

    .logo .apici{
        display: none;
    }
    
}
</style>