import axios from 'axios';
import { reactive } from 'vue'

export const store = reactive({
    // data: [],
    // lista: '',
    // page: [],
    // currentPage: 1,
    // queryOfPerson: 'Avenger',
    // totalPage: '',
    cocktails:[],
    nomeCocktail:' ciao',
    toggleList: false,
    PrevLaunch (){
        return store.toggleList
    }

})


export function getCocktailfromApi() {
    axios.get("http://127.0.0.1:8000/api/cocktails").then((response) => {
        const results = response.data;
        //recupero tutti i dati relativi ai progetti
        store.cocktails.push(...results)
    })
}

