<script>

import axios from "axios"
import { store } from "../store.js";

import MainCard from "./MainCard.vue";

export default {
    data(){
        return{

            store,

        }
    },

    created() {

        axios.get(this.store.trendApiCall).then((res) =>{

           

            this.store.movies = res.data.results
            
        })

    },

    components : {
        MainCard,
    },
}

</script>


<template>

<section>
    
    <MainCard v-for="movie in store.movies" :movie="movie"></MainCard>

</section>

</template>


<style lang="scss" scoped>

section{
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
    width: 80%;
    margin: 50px auto;
  
}   

</style>