<script>

import axios from "axios"
import { store } from "../store.js";

import MainMovies from "./MainMovies.vue";
import MainSeries from "./MainSeries.vue"

export default {
    data(){
        return{

            store,

        }
    },

    created() {

//All creazione della pagina la proprietà moviesList indicata in 'store.js' si popola con i film in tendenza dell'ultima settimana
        axios.get(this.store.trendApiCall).then((res) =>{

            this.store.moviesList = res.data.results
           
        })

    },

    components : {
        MainMovies,
        MainSeries,
    },
}
            


</script>


<template>


<!-- FILMS -->

    <h1 v-show="store.moviesList.length != 0">{{ store.moviesListTitle }}</h1>

<section>
    
    <MainMovies v-for="movie in store.moviesList" :movie="movie"></MainMovies>

</section>


<hr>

<!-- SERIE TV -->

    <h1 v-show="store.tvShowsList.length != 0">Serie Tv</h1>

<section>

    <MainSeries v-show="store.tvShowsList.length != 0" v-for="tvshow in store.tvShowsList" :tvShow="tvshow"></MainSeries>
    

</section>
    

</template>


<style lang="scss" scoped>

h1{
    padding: 20px 100px;
    text-transform: uppercase;
}

section{
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
    width: 80%;
    margin: 50px auto;
  
}   

</style>