<script>

import { store } from '../store.js';



export default {
    data(){
        return{

            store,

        }
    },

    props : {

        movie : Object
    },

    methods : {

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
        }
    }

    
}

</script>

<template>
    
        <div class="card-container">
            <div> <strong>{{ movie.title}}</strong> </div>
            <div> <small>({{ movie.original_title }})</small></div>
            <div>Lingua :  <span :class="`fi fi-${flagIcon()} fis`"></span></div>
            <div> <em>voto : {{ movie.vote_average }}</em> </div>
        </div>

    
        


</template>

<style lang="scss" scoped>



    .card-container{
        width: 200px;
        border: 1px solid gray;
        padding: 5px;
    }


</style>