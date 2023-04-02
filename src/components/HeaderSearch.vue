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
            <select name="" id="">
                <option value="">Genere</option>
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

        input{
            outline: none;
            padding: 4px 12px;
            
            transition: .5s;
        }

        input:hover{
            transform: scale(1.1);
        }

        button{
            padding: 5px;
            cursor: pointer;
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