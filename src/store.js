import axios from "axios"
import { reactive } from "vue";

export const store = reactive({
    cocktails:[],
});


export function getCocktailfromApi() {
    axios.get("http://127.0.0.1:8000/api/cocktails").then((response) => {
        const results = response.data;
        console.log(results)
        //recupero tutti i dati relativi ai progetti
        store.cocktails.push(...results)
    })
}

