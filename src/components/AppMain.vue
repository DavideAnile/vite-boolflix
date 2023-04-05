<script>

import axios from "axios"
import { store } from "../store.js";

import MovieItem from "./MovieItem.vue";
import SerieItem from "./SerieItem.vue"

export default {
    data(){
        return{

            store,
            
            slider : '',
            
        }
    },

    created() {

        //Alla creazione della pagina la proprietà moviesList indicata in 'store.js' si popola con i film in tendenza dell'ultima settimana
        axios.get(this.store.trendApiCall).then((res) =>{

            this.store.moviesList = res.data.results
            
        })

    },
             
    components : {
        MovieItem,
        SerieItem,
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
            },
        

        //AL click l'array preferedList diventa '[ ]'    
        clearList(){
            this.store.preferedList = []
        }    

    }
}
            


</script>

                    
                    
<template>

    
<!-- FILMS -->

<div class="films">
    <h1 v-show="store.moviesList.length != 0" class="title">{{ store.moviesListTitle }}</h1>

    <div v-show="store.moviesList.length == 0" class="not-found">Nessun Film trovato</div>
   
    <div class="clearList" v-show="store.preferedListStatus == true" @click="clearList()">Svuota Lista Preferiti</div>

</div>

 <section>

     
     <div class="cover">
         <div class="slider" ref="Movieslider">
             
            <MovieItem v-if="store.preferedListStatus == true" v-for=" (movie,index) in store.preferedList" :movie="movie" :key="index" :indice="index"></MovieItem>

            <MovieItem  v-else v-for=" (movie, indice)  in store.moviesList" :movie="movie" :key="indice" :indice="indice"></MovieItem>
             
            </div>
        </div>

    <div v-show="store.moviesList.length > 4" @click="scrollingMoviesLeft()" class="left-btn"><button><i class="fa-solid fa-arrow-left"></i></button></div>

    <div v-show="store.moviesList.length > 4" @click="scrollingMoviesRight()" class="right-btn"><button><i class="fa-solid fa-arrow-right"></i></button></div>

 </section>   
                    
            
<!-- SERIE TV -->
<div class="serie" v-show="store.tvShowsList.length != 0 && store.preferedListStatus == false">

    <h1 v-show="store.tvShowsList.length != 0" class="title">Serie Tv</h1>
    
    <div v-show="store.tvShowsList.length == 0" class="not-found">Nessuna Serie tv Trovata</div>

   
    
</div>

<section v-show="store.tvShowsList.length != 0 && store.preferedListStatus == false" >

    
    
    <div class="cover">

        
        <div class="slider" ref="Tvshowslider">

            
            
            <SerieItem v-show="store.tvShowsList.length != 0" v-for=" (tvshow, index) in store.tvShowsList" :tvShow="tvshow" :key="index" :index="index"></SerieItem>
            
        </div>
    </div>

    <div v-show="store.tvShowsList.length > 4" @click="scrollingTvshowsLeft()" class="left-btn"><button><i class="fa-solid fa-arrow-left"></i></button></div>

    <div v-show="store.tvShowsList.length > 4" @click="scrollingTvshowsRight()" class="right-btn"><button><i class="fa-solid fa-arrow-right"></i></button></div>

    

</section>
    

</template>
            
<style lang="scss" scoped>

.films{
    display: flex;
    justify-content: space-around;
    position: relative;
    
    .title{
        margin-top: 120px;
    }
    .not-found{
        text-align: center;
        font-weight: bold;
        font-size: 2em;
    }
     
     .clearList{
        
       margin-top: 150px;
       border: 1px solid white;
       height: 30px;
       padding: 0 10px;
       cursor: pointer;
       
     }
    
}

.serie{
    padding-bottom: 50px;
    .not-found{
        text-align: center;
        font-weight: bold;
        font-size: 2em;
        padding-top: 30px;
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
        background-image: linear-gradient(-90deg, rgb(0, 0, 0), transparent);
    }
    
    .cover::before{
        position: absolute;
        content: "";
        top: 50px;
        left: 50px;
        z-index: 1;
        width: 200px;
        height: 500px;
        background-image: linear-gradient(90deg, rgb(0, 0, 0), transparent);
    }
}

</style>





       

       
          
            
            

            
            


            

          
            



    













