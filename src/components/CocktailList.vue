<script>
import axios from 'axios';
import { store } from '../store';
import MediumCard from './MediumCard.vue';
export default {
    components: {
        MediumCard
    },
    data() {
        return {
            listacoctail: [],
            valore: "",
            testo: "",
            validateArray: false,
        }
    },
    methods: {
        filterlist() {
            let newLits = []
            if (this.valore === "" || (this.valore !== "" && this.testo === "")) {
                //per ri ottenere tutti i dati basta mettere il campo vuoto nella select
                return this.listacoctail
            }
            else if (this.valore === '1' && this.testo !== "") {
                //prende il valore dalla select quindi filtrera per la category 
                newLits = this.listacoctail.filter((cokctail) => cokctail['strCategory'].toLowerCase().includes(this.testo.toLowerCase()))
                //return newLits
            }
            else if (this.valore === '2' && this.testo !== "") {
                newLits = this.listacoctail.filter((cokctail) => cokctail['strAlcoholic'].toLowerCase().includes(this.testo.toLowerCase()))
                //return newLits
            }
            else if (this.valore === '3' && this.testo !== "") {
                newLits = this.listacoctail.filter((cokctail) => cokctail['strDrink'].toLowerCase().includes(this.testo.toLowerCase()))
                //return newLits
            }
            //boleano che attiva il banner per fa capire che non ci sono elementi 
            // prima del return setto la variabile di conseguenza
            if (newLits.length === 0) {
                this.validateArray = true
            }
            else {
                this.validateArray = false
            }
            return newLits
        },
        fetchData() {

            axios.get('http://127.0.0.1:8000/api/cocktails')
                .then(response => {
                    console.log(response.data)
                    this.listacoctail = response.data
                    // console.log(response)
                })
        },
        toggleDescription(cocktail) {
            //cazzo siiii
            const drink = cocktail
            store.toggleList = true
            let ingredienti = []
            let misure = []
            console.log(drink)
            if (drink['ingredienti'] === undefined) {
                for (let i = 1; i < 15; i++) {
                    if (drink['strIngredient' + i] !== null) {
                        ingredienti.push(drink['strIngredient' + i])
                    }
                    if (drink['strMeasure' + i] !== null) {
                        misure.push(drink['strMeasure' + i])
                    }
                    delete drink['strIngredient' + i];
                    delete drink['strMeasure' + i];
                }
                drink['ingredienti'] = ingredienti
                drink['misure'] = misure
                store.drinkView = drink
                console.log(ingredienti)
                console.log(drink)
            }else{
                store.drinkView = drink
            }

            // console.log(store.drinkView)
        }
    },
    mounted() {
        this.fetchData()
    }
}
</script>
<template>
    <div class="container-fluid benghi-edition">
        <div class="form-control form-benghi-edition">
            <input class="form-control riccardo" type="text" name="" id="" placeholder="inserisci una parola chiave"
                v-model="testo">
            <select class="form-select" aria-label="Default select example" v-model="valore">
                <option selected value="">Dammi tutto!</option>
                <option value="1">Categoria</option>
                <option value="2">Tipologia di bigghiere</option>
                <option value="3">Per Nome</option>
            </select>
        </div>

        <div class="cocktail-list gap-5 mt-3">
            <!-- ciclo per creare le card e passiamo i valori con props -->
            <div class="danger" v-if="this.validateArray === true"> Non ci sono elementi</div>
            <MediumCard :drink=cocktail v-for="cocktail in filterlist()" @click="toggleDescription(cocktail)"></MediumCard>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../../scss/partials/mixins" as *;
@use "../../scss/partials/variables" as *;

.benghi-edition {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
}

.form-benghi-edition {
    display: flex;
    gap: 1rem;
    background-color: $color-section-light;
    justify-content: center;
    border: 0;
}

.form-select {
    background-color: #a9b6c1;
    width: 155px;
}

.cocktail-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.riccardo {
    padding: 10px 15px;
    height: 100%;
    width: 30%;
}

.danger {
    width: 100%;
    color: white;
    font-size: 3rem;
}
</style>