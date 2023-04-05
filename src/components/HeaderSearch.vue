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

        <div class="nav-container">
            <select name="" id="" v-model="store.searchGenre">
                
                <option value="0">Seleziona Genere</option>
                <option value="28">Action</option>
                <option value="12">Adventure</option>
                <option value="16">Animation</option>
                <option value="35">Comedy</option>
                <option value="80">Crime</option>
                <option value="99">Documentary</option>
                <option value="18">Drama</option>
                <option value="10751">Family</option>
                <option value="14">Fantasy</option>
                <option value="27">Horror</option>

            </select>

            <input v-model="store.searchText" type="text" placeholder="Cerca qualcosa" @keyup.enter="$emit('searchMovieEvent'), $emit('searchTvShowEvent') ">
            <button @click="$emit('searchTvShowEvent'), $emit('searchMovieEvent')"><i class="fa-solid fa-magnifying-glass"></i></button>
            <i class="fa-solid fa-bell" style="font-size: 1.3em;"></i>
            <div class="profile"><img src="/images/Netflix-avatar.png" alt=""></div>
            
        </div>

</template>

<style lang="scss" scoped>

.nav-container{
        
        display: flex;
        align-items: center;
        gap: 20px;

        select{
            padding: 5px;
            background-color: black;
            border: 1px solid lightgray;
            outline: none;
        }

        input{
            outline: none;
            padding: 4px 12px;
            background-color:  rgba(0, 0, 0, 0.315);
            border: 1px solid lightgray;
            transition: .5s;
        }

        input:hover{
            transform: scale(1.1);
        }

        button{
            padding: 5px;
            cursor: pointer;
            background-color: black;
            border: 1px solid lightgray;
        }

        .profile{
            width: 30px;
            height: 30px;
            

            img{
                width: 100%;
            }
        }
    }


</style>