<script>
import axios from 'axios';
import { store } from '../store.js';


import HeaderSearch from './HeaderSearch.vue';

export default {
    data(){
        return{

            store,
        }
    },

    components : {

        HeaderSearch,
    },

    
    methods : {

    //creo metodo per la ricerca dei film    
        searchMovies() {

    //SE il valore dell'input è ''        
          if(this.store.searchText == ''){

            alert('Inserisci il nome di un Film o di una serie TV!')

    //ALTRIMENTI eseguo la chiamata API        
          } else {

              this.store.moviesListTitle = 'Films'   
     
                 let newMoviesApiCall = this.store.movieApiCall + this.store.ApiQuery + encodeURIComponent(this.store.searchText);
     
     
                     axios.get(newMoviesApiCall).then((res) =>{
                     this.store.moviesList = res.data.results
                     console.log(this.store.moviesList)
                     console.log(newMoviesApiCall)
                     })
          } 


            },


    //creo metodo per la ricerca delle serie tv        
        searchSeries (){


    //SE il valore di input è ''        
            if(this.store.searchText == ''){


    //ALTRIMENTI eseguo la chiamata API            
            } else {

                let newSeriesApiCall = this.store.seriesApiCall + this.store.ApiQuery + encodeURIComponent(this.store.searchText);
    
                    axios.get(newSeriesApiCall).then((res) =>{
                        this.store.tvShowsList = res.data.results
                        console.log(this.store.tvShowsList)
                    })
            }

        }

    }
        
}


</script>

<template>

    <div class="container">
        <div class="logo-container">
            <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="">
            <div><i class="fa-solid fa-trademark"></i></div>
        </div>

        <HeaderSearch @searchMovieEvent="searchMovies()" @searchTvShowEvent="searchSeries()"></HeaderSearch>
            
        
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

    .logo-container{
        position: relative;
        display: flex;
        width: 200px;
        
        img{
            width: 80%;
        }

        div{
            position: absolute;
            right: 15px;
            top: -10px;
            

            i{
                font-size: 1em;
            }
        }
        
    }
    
}
    


</style>