import { createRouter, createWebHistory } from "vue-router";

// importazione componenti singole pagine
import Home from "./pages/Home.vue";
import Contacts from "./pages/Contacts.vue";
import AboutUs from "./pages/Contacts.vue";
// ... import di altri componenti

// definiamo le rotte
const routes = [
    {
        path: "/", // uri da scrivere nel browser
        name: "home", // nome della rotta da usare per creare un link
        component: Home // componente che ritorna l'html della pagina
    },

    {
        path: "/contacts", // uri da scrivere nel browser
        name: "contacts", // nome della rotta da usare per creare un link
        component: Contacts // componente che ritorna l'html della pagina
    },

    {
        path: "/about-us", // uri da scrivere nel browser
        name: "about-us", // nome della rotta da usare per creare un link
        component: AboutUs // componente che ritorna l'html della pagina
    },

]

// creazione istanza di Router
const router = createRouter({
    // Serve ad indicare come gestire l'url al cambio pagina
    history: createWebHistory(),
    // passiamo l'array delle rotte
    routes
});

// esportiamo l'istanza router per poterla usare dentro main.js
export { router };