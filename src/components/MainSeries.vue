<script>
import { store } from '../store.js';

export default {
    data(){
        return{

            store,

            maxStars : 5

        }
    },

    props : {

        tvShow : Object
    },

    methods : {

        flagIcon(){
            let language = this.tvShow.original_language

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

            let newVote = Math.ceil(this.tvShow.vote_average / 2)
  
// creo array vuoto tramite constructor con length = (newVote)           
            let coloredStars = Array(newVote).fill(true)

//creo array vuoto tramite constructor con length = maxStars(5) - (newVote)            
            let emptyStars = Array(this.maxStars - newVote).fill(false)

//la funzione ritorna la concatenazione dei due array            
            return coloredStars.concat(emptyStars)
        }
    }
}

</script>

<template>
  
        <div class="card-container">
            <div class="thumb-container">
                <div v-if="tvShow.poster_path == null" class="no-img">NO IMAGE FOUND</div>
                <img v-else :src= " `${this.store.thumbPath + tvShow.poster_path}` "  alt="">
            </div>
            <div class="info-container">

                <div> <span style="font-weight: bold;"> Titolo :</span> {{ tvShow.name }} </div>
                <div> <span style="font-weight: bold;">Titolo Originale :</span> <small>({{ tvShow.original_name }})</small></div>
                <div> <span style="font-weight: bold;">Lingua :</span> <span :class="`fi fi-${flagIcon()} fis`"></span> </div>
                <div> <em style="font-weight: bold;">Voto : </em> <span v-for="star in createStar()" :class="star == true ? 'yellow' : '' "> <i class="fa-solid fa-star"></i></span> </div>

            </div>
        </div>

</template>

<style lang="scss" scoped>

.card-container{
        position: relative;

        display: flex;
        flex-shrink: 0;
        
        width: 342px;
        height: 500px;
        border: 1px solid gray;
        cursor: pointer;
        
        

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