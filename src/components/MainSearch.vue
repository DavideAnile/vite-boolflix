<script>
import { store } from '../store.js';

export default {
    data(){
        return{

            store,

        }
    }
}


</script>

<template>

        <div class="input-container">
            <input v-model="store.searchMovie" type="text" placeholder="Cerca qualcosa" @keyup.enter="$emit('search')">
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>

</template>

<style lang="scss" scoped>

.input-container{
        
        display: flex;
        gap: 20px;

        input{
            outline: none;
            padding: 4px 12px;
            border-radius: 10px;
            border: 1px solid transparent;
            transition: .5s;
        }

        input:hover{
            transform: scale(1.1);
        }
    }


</style>