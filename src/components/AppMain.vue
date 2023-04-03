<script>

import axios from "axios"
import { store } from "../store.js";

import MainMovies from "./MainMovies.vue";
import MainSeries from "./MainSeries.vue"

export default {
    data(){
        return{

            store,

            slider : '',
            
        }
    },

    created() {

//All creazione della pagina la proprietà moviesList indicata in 'store.js' si popola con i film in tendenza dell'ultima settimana
        axios.get(this.store.trendApiCall).then((res) =>{

            this.store.moviesList = res.data.results
            
        })

            //  for(let i = 0; i < this.store.moviesList.length; i++){
            
            //     this.store.moviesId.push(this.store.moviesList[i].id)
            //     let ActorsApiCall = this.store.movieActorsApiCall + this.store.moviesId[i] + '/credits' + this.store.apiKey
            //     axios.get(ActorsApiCall).then((response) =>{
                
                //             for(let k = 0; k < 5; k++ ){
                                
                //                 this.store.movieActors.push(response.data.cast[k].name)
                            
                //             }
                    
                            
                //         })
                        
                //     }
                    
                
            
                

                    
                    
                    
            
            

    },

    components : {
        MainMovies,
        MainSeries,
    },

    methods : {

        scrollingMoviesRight(){

            this.slider = this.$refs.Movieslider
            this.slider.scrollBy(450, 0)
        },

            
        scrollingMoviesLeft(){

            this.slider = this.$refs.Movieslider
            this.slider.scrollBy(-450,0)
        },

            
        scrollingTvshowsRight(){

            this.slider = this.$refs.Tvshowslider
            this.slider.scrollBy(450,0)
            },
           
        scrollingTvshowsLeft(){

            this.slider = this.$refs.Tvshowslider
            this.slider.scrollBy(-450,0)
            }
            
            

            
            


            

          
            


    }
}
            


</script>


<template>

    
<!-- FILMS -->

<div class="films">
    <h1 v-show="store.moviesList.length != 0">{{ store.moviesListTitle }}</h1>

    <div v-show="store.moviesList.length == 0" class="not-found">Nessun Film trovato</div>

</div>

 <section>

     
     <div class="cover">
         <div class="slider" ref="Movieslider">
             
             <MainMovies v-for="movie in store.moviesList" :movie="movie"></MainMovies>
             
            </div>
        </div>

    <div v-show="store.moviesList.length > 4" @click="scrollingMoviesLeft()" class="left-btn"><button><i class="fa-solid fa-arrow-left"></i></button></div>

    <div v-show="store.moviesList.length > 4" @click="scrollingMoviesRight()" class="right-btn"><button><i class="fa-solid fa-arrow-right"></i></button></div>

 </section>   
    




<!-- SERIE TV -->

    <h1 v-show="store.tvShowsList.length != 0">Serie Tv</h1>

<section v-show="store.tvShowsList.length != 0">

    
    
    <div class="cover">
        <div class="slider" ref="Tvshowslider">
            
            <MainSeries v-show="store.tvShowsList.length != 0" v-for="tvshow in store.tvShowsList" :tvShow="tvshow" :actors="store.movieActors"></MainSeries>
            
        </div>
    </div>

    <div v-show="store.tvShowsList.length > 4" @click="scrollingTvshowsLeft()" class="left-btn"><button><i class="fa-solid fa-arrow-left"></i></button></div>

    <div v-show="store.tvShowsList.length > 4" @click="scrollingTvshowsRight()" class="right-btn"><button><i class="fa-solid fa-arrow-right"></i></button></div>

    

</section>
    

</template>


<style lang="scss" scoped>

.films{
    padding-top: 120px;

    .not-found{
        text-align: center;
        font-weight: bold;
        font-size: 2em;
    }
}

h1{
    padding: 20px 150px;
    text-transform: uppercase;
}

section{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .left-btn{
        position: absolute;
        left: 160px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
        
        
        
    
            button{
                width: 40px;
                height: 40px;
                border: none;
                border-radius: 50%;
                cursor: pointer; 
    
                    i{
                    font-size: 2em;
               
                    }
                }
        }


    .right-btn{
        position: absolute;
        right: 160px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        
        
        
    
            button{
                width: 40px;
                height: 40px;
                border: none;
                border-radius: 50%; 
                cursor: pointer;
    
                i{
                    font-size: 2em;
                
                }
            }
        }
    .cover{
        position: relative;
        width: 90%;
        height: 100%;
    
    
        .slider{
        
        display: flex;
        justify-content: flex-start;
    
        flex-flow: row nowrap;
        gap: 20px;
        width: 90%;
        margin: 50px auto;
        overflow: hidden;
        scroll-behavior: smooth;
    
        } 
    }
    .cover::after{
        position: absolute;
        content: "";
        top: 50px;
        right: 50px;
        z-index: 1;
        width: 200px;
        height: 500px;
        background-image: linear-gradient(-90deg, #434343, transparent);
    }
    
    .cover::before{
        position: absolute;
        content: "";
        top: 50px;
        left: 50px;
        z-index: 1;
        width: 200px;
        height: 500px;
        background-image: linear-gradient(90deg, #434343, transparent);
    }
}









</style>