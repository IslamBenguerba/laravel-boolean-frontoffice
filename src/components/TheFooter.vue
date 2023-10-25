<script>

export default {

}

</script>

<template>
    
    <div class="footer-section">

        <div class="container h-100">

            <div class="row row-cols-3 h-100">

                <!-- Left Column  -->

                <div class="col">

                    <div>

                        <div class="mb-3 title-footer">CONTATTI</div>

                        <div class="text-light text-start">

                            <div>
                                <i class="fa-solid fa-location-dot px-2"></i>
                                <span>Piazza Maggiore 80, 40124, Bologna</span>
                            </div>

                            <div>
                                <i class="fa-solid fa-phone px-2"></i>
                                <span>+393356671299</span>
                            </div>

                            <div>
                                <i class="fa-regular fa-envelope px-2"></i>
                                <span>pub@gmail.com</span>
                            </div>

                        </div>

                    </div>


                </div>

                <!-- Center Column  -->

                <div class="col">

                    <div class="mb-5 title-footer text-center">SOCIAL MEDIA</div>

                    <i class="fa-solid fa-martini-glass icon-cocktail mb-5"></i>

                    <!-- Social Media Buttons  -->

                    <div>

                        <span class="social-media-buttons">

                            <span class="social-media-btn">
                                <img src="icons/instagram.svg" alt="Instagram">
                            </span>

                            <span class="social-media-btn">
                                <img src="icons/twitter.svg" alt="Twitter">
                            </span>

                            <span class="social-media-btn">
                                <img src="icons/youtube.svg" alt="Youtube">
                            </span>

                            <span class="social-media-btn">
                                <img src="icons/linkedin.svg" alt="Linkedin">
                            </span>

                        </span>

                    </div>

                    <div class="text-center text-light mt-5">Copyright © 2023 New Cocktails SRL. Tutti i diritti riservati</div>

                </div>

                <!-- Right Column  -->

                <div class="col">

                    <div>

                        <div>

                            <div class="mb-3 title-footer text-end">ORARI DI APERTURA

                            </div>

                            <div class="text-light text-end">

                                <div>Lun-Gio 18.00-00.00</div>

                                <div>Ven-Sab 18.00-2.00</div>

                                <div>Dom 18.00-00.00</div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
</template>


<style lang="scss" scoped>
@use "../../scss/partials/mixins" as *;
@use "../../scss/partials/variables" as *;

.footer-section {

    height: 400px;
    width: 100%;
    background-color: #0e1317;



    .col {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .title-footer {
        color: white;
        font-size: 1.8rem;
    }

    .icon-cocktail {
        color: white;
        font-size: 3rem;
        text-align: center;
    }

    .social-media-buttons {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
    }

    .social-media-btn {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        outline: 2px solid white;
        cursor: pointer;
        transition: all 0.3s;
        display: grid;
        place-items: center;
    }

    .social-media-btn img {
        width: 20px;
        height: 20px;
    }


    .social-media-btn:hover {
        outline-offset: 3px;
        transition: all 0.3s;
    }

    .social-media-btn:hover img {
        transition: all 0.3s;
    }

    .social-media-btn:hover img {
        transform: scale(1.15);
    }

    .social-media-btn:hover:nth-child(1) {
        background: radial-gradient(circle at 30% 107%, #fdf497 0%,
                #fdf497 5%, #fd5949 45%,
                #d6249f 60%, #285AEB 90%);
    }

    .social-media-btn:hover:nth-child(2) {
        background-color: #00acee;
    }

    .social-media-btn:hover:nth-child(3) {
        background-color: #c4302b;
    }

    .social-media-btn:hover:nth-child(4) {
        background-color: #0e76a8;
    }

}
</style>
