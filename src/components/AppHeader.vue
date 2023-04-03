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

    //ALTRIMENTI se il valore della select è ''
          } else if(this.store.searchGenre == '') {

              this.store.moviesListTitle = 'Films'   
     
                 let newMoviesApiCall = this.store.movieApiCall + this.store.ApiQuery + encodeURIComponent(this.store.searchText);
                 axios.get(newMoviesApiCall).then((res) =>{
                 this.store.moviesList = res.data.results
                 
                 
                 })
     
     //ALTRIMENTI SE il valore della select è diverso da ''
          } else if(this.store.searchGenre != '') {

     // l'array filtrato diventa vuoto       
                this.store.genreMoviesList = []
                
                this.store.moviesListTitle = 'Films'   
        
                let newMoviesApiCall = this.store.movieApiCall + this.store.ApiQuery + encodeURIComponent(this.store.searchText);
                axios.get(newMoviesApiCall).then((res) =>{
                this.store.moviesList = res.data.results
                
    // creo un ciclo per ciclare ogni film all'interno dell'array con tutti i film trovati da 'searchText'            
                for(let i = 0; i < this.store.moviesList.length; i++){
                 
    // Se nella proprietà 'genre_ids' del film con indice [i] è presente il valore della select
                    if(this.store.moviesList[i].genre_ids.includes(parseInt(this.store.searchGenre))){

            //°pusho quel film dentro l'array filtrato            
                        this.store.genreMoviesList.push(this.store.moviesList[i])
                        
     //ALTRIMENTI non fare niente                   
                    } else{

                    }
                    
                }

    // ALLa fine del ciclo la l'array visualizzato in pagina è uguale all'array filtrato            
                    this.store.moviesList = this.store.genreMoviesList
                
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
                        
                    })
            }

        }

    }
        
}


</script>

<template>

    <div class="container">
        <div class="left-header">

            <div class="logo-container">
                <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="">
                <div><i class="fa-solid fa-trademark"></i></div>
            </div>

            <div>
                <ul>
                    <li>Home</li>
                    <li>Serie TV</li>
                    <li>Film</li>
                    <li>Nuovi e Popolari</li>
                    <li>La mia lista</li>
                    <li>Sfoglia per Lingua</li>
                </ul>
            </div>
            
        </div>

        <div class="right-header">

            <HeaderSearch @searchMovieEvent="searchMovies()" @searchTvShowEvent="searchSeries()"></HeaderSearch>

        </div>
    </div>
            
        

</template>

<style lang="scss" scoped>

.container{
    position: fixed;
    width: 100%;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    background-color: black;
    padding: 0 50px;

    .left-header{
        display: flex;
        align-items: center;
    

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

        ul{
            display: flex;
            
            list-style-type: none;

            li{
                opacity: .5;
                transition: .5s;
                padding: 0 10px;
            }

            li:hover{
                opacity: 1;
                cursor: pointer;
            }
            
        }

    } 
    
}
    


</style>