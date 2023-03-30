<script>
import axios from 'axios';
import { store } from '../store.js';


import MainSearch from './MainSearch.vue';

export default {
    data(){
        return{

            store,
        }
    },

    components : {

        MainSearch,
    },

    methods : {

        search() {
           
            let newApiCall = (this.store.movieApiCall + this.store.movieApiQuery + this.store.searchMovie);

            axios.get(newApiCall).then((res) =>{
                this.store.movies = res.data.results
                console.log(this.store.movies)
            })

        },

        
    }
}

</script>

<template>

    <div class="container">
        <div class="title">
            BOOLFLIX
            <div><i class="fa-solid fa-trademark"></i></div>
        </div>

        <MainSearch @search="search()"></MainSearch>
            
        
    </div>

</template>

<style lang="scss" scoped>

.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    background-color: black;
    padding: 0 50px;

    .title{
        display: flex;
        font-size: 2em;
        color: red;
        
        div{
            display: flex;
            

            i{
                font-size: .5em;
            }
        }
        
    }
    
}
    


</style>