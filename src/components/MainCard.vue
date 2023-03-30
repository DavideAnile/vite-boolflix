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
            <div> {{ movie.title}} </div>
            <div> {{ movie.original_title }}</div>
            <div> <span :class="`fi fi-${flagIcon()} fis`"></span></div>
            <div> {{ movie.vote_average }} </div>
        </div>

    
        


</template>

<style lang="scss" scoped>



    .card-container{
        width: 200px;
    }


</style>