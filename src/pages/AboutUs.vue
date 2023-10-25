<script>
export default {
    data() {
        return {
            team: [
                {
                    name: "Riccardo Carluccio",
                    position: "Jr Full Stack Developer",
                    image: "src/assets/imgs/riccardo.webp",
                },
                {
                    name: "Islam Benguerba",
                    position: "Jr Full Stack Developer",
                    image: "src/assets/imgs/islam.jpg",
                },
                {
                    name: "Ludovico Pellecchia",
                    position: "Jr Full Stack Developer",
                    image: "src/assets/imgs/ludovico.webp",
                },
                {
                    name: "Alessandro Storchi",
                    position: "Jr Full Stack Developer",
                    image: "src/assets/imgs/alessandro.JPG",
                },
                {
                    name: "Pietro Fiori",
                    position: "Jr Full Stack Developer",
                    image: "src/assets/imgs/pietro.jpg",
                },
            ],
        };
    },
};
</script>

<template>
    <div class="container-fluid">
        <div class="container benghi-edition">
            <Subtitle class="sub py-5" titolo="ABOUTS US">AIUTO ...</Subtitle>
            <p class="py-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
                inventore tempore suscipit vel. Saepe, eius? Earum obcaecati dignissimos
                eos ab nesciunt natus perspiciatis quam quas. Laboriosam commodi nam hic
                blanditiis. Dicta eaque dignissimos asperiores explicabo deserunt,
                assumenda ipsa obcaecati.
            </p>
        </div>
        <div class="about-us">
            <div class="about-card" v-for="(person, index) in team" :key="index">
                <div class="profile-image">
                    <img :src="person.image" alt="Profile Image" />
                </div>
                <h3>{{ person.name }}</h3>
                <p>{{ person.position }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.benghi-edition {
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.about-us {
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

.about-card {
    width: 250px;
    height: 300px;
    text-align: center;
    background-color: #ffffff00;
    //   border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
}

.profile-image img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto 10px;
}

h3 {
    font-size: 1.3rem;
    color: #cfc3b3;
}

p {
    font-size: 1rem;
    color: #cfc3b3;
}

.sub {
    font-size: 3rem;
    font-weight: bolder;
    color: #cfc3b3;
}
</style>
