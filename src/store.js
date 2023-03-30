import {reactive} from "vue";

export const store = reactive({

    trendApiCall : 'https://api.themoviedb.org/3/trending/movie/week?api_key=993ed6a9234f0dc067637ff07ea60002',

    movieApiCall : 'https://api.themoviedb.org/3/search/movie?api_key=993ed6a9234f0dc067637ff07ea60002',

    movieApiQuery : '&query=',

    searchMovie : '',

    movies : [],


})