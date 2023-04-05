<script>

import { ref } from 'vue';
import { store } from '../store.js';
import axios from 'axios';



export default {
    data(){
        return{

            store,

            isActive : false,
            
            maxStars : 5,

            

        }
    },

    props : {

        movie : Object,
        
       indice : Number,

        
    },

    methods : {

        // installando il pacchetto flag-icons alcuni formati 'ISO 3166-1 alpha-2 code' contenuti in esso non corrispondono con la proprietà 'movie.original_language', quindi      
        // creo metodo per cambio valore di alcune proprietò 'orginal_language' in modo da visualizzare la bandiera corrispondente      
        flagIcon(){
            let language = this.movie.original_language

            if(language == 'en'){

                language = 'gb'
                
            } else if ( language == 'ja'){

                language = 'jp'
               
            } else if (language == 'zh'){

                language = 'cn'
            } else if (language == 'ko'){

                language = 'kr'

            } return language
        },



        // creo una metodo per creazione delle stars        
        createStar(){

        // creo nuova variabile con il voto arrotondato tramite 'math.ceil' diviso 2 visto che il numero di stelle deve essere compreso tra 1 e 5

            let newVote = Math.ceil(this.movie.vote_average / 2)
  
        // creo array vuoto tramite constructor con length = (newVote)           
            let coloredStars = Array(newVote).fill(true)

        //creo array vuoto tramite constructor con length = maxStars(5) - (newVote)            
            let emptyStars = Array(this.maxStars - newVote).fill(false)

        //la funzione ritorna la concatenazione dei due array            
            return coloredStars.concat(emptyStars)
        },

        
        
        showFilteredActors(){


            //Il valore di questa booleana settata a true serve per ogni volta che viene effettutata una ricerca (mostra il div con classe 'actors')
            this.store.activeArray = true

            //prendo tutti gli elementi con classe .actors e li salvo in una variabile            
            let arrayAttori = document.querySelectorAll('.actors')

            //creo ciclo for per ogni attore dentro l'array salvato                
            arrayAttori.forEach((elemento) =>{

            //rimuovo la classe 'active' da ogni elemento                    
                elemento.classList.remove('active')
            })
            //aggiungo la classe 'active' all'elemento con l'indice attivo    
            arrayAttori[this.indice].classList.add('active')

            //l'array degli actors ritorna vuoto            
            this.store.movieActors = []

            //inizialiazzo variabile che ha valore della chiamata 'base' per recuperare gli attori dei movies
            let movieActorsApiCall = 'https://api.themoviedb.org/3/movie/'

            if(this.store.preferedListStatus == true){

                // creo nuova chiamata API per cercare gli actors in base all'ID cliccato            
                 this.store.actorsApiCall = movieActorsApiCall + this.store.preferedList[this.indice].id + '/credits' + this.store.apiKey
                
            } else {

                // creo nuova chiamata API per cercare gli actors in base all'ID cliccato            
                 this.store.actorsApiCall = movieActorsApiCall + this.store.moviesList[this.indice].id + '/credits' + this.store.apiKey
            }

            axios.get(this.store.actorsApiCall).then((response) =>{

            //Se la lunghezza dell'array 'cast' della response è diverso da 0     
                    if(response.data.cast.length != 0){

                    //°SE la lunghezza dell'array è maggiore di 5    
                        if(response.data.cast.length > 5){

                            // creo un ciclo for per prendere solamente 5 actors dall'array di risposta                
                                        for(let k = 0; k < 5; k++ ){
                                        
                            //pusho i 5 nomi ricavati dentro l'array degli actors                            
                                        this.store.movieActors.push(response.data.cast[k].name)
                                
                                    }
                    //ALTRIMENTI  (se la lunghezza dell'array è minore di 5)                      
                        } else {

                                    for(let k = 0; k < response.data.cast.length;k++){

                                        this.store.movieActors.push(response.data.cast[k].name)
                                    }       
                        }

            //ALTRIMENTI NON FARE NULLA                
                    } else {


                }

                        
            })
                
        },


        addMovie(){
            //SE il film è gia presente nella lista non aggiungerlo
            if(this.store.preferedList.includes(this.store.moviesList[this.indice])){

            //ALTRIMENTI pusho il film dentro l'array dei preferiti    
            } else {
                
                this.store.preferedList.push(this.store.moviesList[this.indice])
            }
            
        }
    
                
    },
        
}
           
</script>


<template>
    
    <section>

        <div class="card-container"  >
            <div class="button-container" @click="addMovie()" v-show="store.preferedListStatus == false"><i class="fa-solid fa-plus"></i></div>
            <div class="thumb-container" >
                <div v-if="movie.poster_path == null" class="no-img">NO IMAGE FOUND</div>
                <img v-else :src= " `${store.thumbPath + movie.poster_path}` "  alt="" >
            </div>

            <div class="info-container" @click="createStar(), showFilteredActors()">
    
                <div> <span style="font-weight: bold;"> Titolo :</span> {{ movie.title}} </div>
                <div> <span style="font-weight: bold;">Titolo Originale :</span>  <small>({{ movie.original_title }})</small></div>
                <div> <span style="font-weight: bold;">Lingua :</span>  <span :class="`fi fi-${flagIcon()} fis`"></span></div>
                <div> <em style="font-weight: bold;">Voto : </em> <span v-for="star in createStar()" :class="star == true ? 'yellow' : '' "> <i class="fa-solid fa-star"></i></span> </div>
                <div>
                    <div v-if="movie.overview == '' "> <span style="font-weight: bold;">Overview :</span> NON DISPONIBILE </div>
                    <div v-else> <span style="font-weight: bold;">Overview :</span> <em>{{ movie.overview }}</em></div>
                </div>
                
            </div>
                
        </div>
    
    
        
        <div class="actors" v-show="store.activeArray">

            <div style="font-weight: bold;">CAST : </div>
            <div v-if="store.movieActors.length == 0">Unknown</div>
            <div v-else v-for="(actor,index) in store.movieActors" :key="index"> <em>{{ actor }}</em></div>

        </div>    
            
           
    </section>

</template>

                        
<style lang="scss" scoped>

section{
    display: flex;
    flex-direction: column;
    
    


    .actors{
        display: none;
        width: 100%;
        border: 1px solid white;
        padding: 10px 10px;
    }

    .actors.active{
        display: block;
    }

  
    
}


    

    .card-container{
        position: relative;

        display: flex;
        flex-shrink: 0;
        
        width: 342px;
        height: 500px;
        border: 1px solid gray;
        cursor: pointer;
        overflow: hidden;
        
        
        .button-container{
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 10px;
            right: 20px;
            z-index: 3;
            width: 30px;
            height: 30px;
            border: 1px solid white;
            border-radius: 50%;
            background-color: gray;
            cursor: pointer;
            transition: .5s;
            
            

            
            
        }

        .button-container:hover{
            transform: scale(1.3);
        }


        .thumb-container{
            width: 100%;
            height: 100%;
            overflow: hidden;
            

            .no-img{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;

            }

            .no-img:hover{
                opacity: 0;
            }

            img{
                
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: 2s;
               
            }

            
        }

        .info-container{
            position: absolute;
            top: 20%;

            display: none;

            padding: 10px;


            .yellow{
                color: yellow;
            }
        }

        
        
    }

    .card-container:hover{
        z-index: 2
    }

    .card-container:hover .info-container{
        display: block;
    }

    .card-container:hover .thumb-container img{
        opacity: .1;
        transform: scale(1.3);
        
    }

    


</style>
        
                
    
                    
    
     
        
    

    



        


   


      

        

    

    
        



