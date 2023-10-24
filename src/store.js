// import axios from 'axios';
import { reactive } from 'vue'

export const store = reactive({
    // data: [],
    // lista: '',
    // page: [],
    // currentPage: 1,
    // queryOfPerson: 'Avenger',
    // totalPage: '',
    nomeCocktail:' ciao',
    toggleList: false,
    PrevLaunch (){
        return store.toggleList
    }
})

