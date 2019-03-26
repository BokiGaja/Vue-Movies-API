<template>
    <div class="container">
        <h1>Movies</h1>
        <movie-search @searching="search"/>
        <ul v-for="movie in movies" :key="movie.id">
            <movie-row :movie="movie"/>
        </ul>
        <!-- This can be separate component -->
        <div v-if="noMovie" style="background-color: red; width: 300px; border-radius: 10%; margin: auto; color: white">
            There is no movie you are looking for
        </div>
    </div>
</template>

<script>
    import { moviesService } from "../services/Movies"
    import MovieRow from '../components/MovieRow'
    import MovieSearch from '../components/MovieSearch'
    export default {
        name: "Movies",
        data() {
            return {
                movies: [],
                initMovies: [],
                searchParams: '',
                noMovie: false
            }
        },

        components: {
            MovieRow,
            MovieSearch
        },

        watch: {
            searchParams(newValue, oldValue) {
                let oldState = [...this.initMovies];
                let newState = oldState.filter(movie => movie.title.includes(this.searchParams));
                if (newState.length > 0) {
                    this.movies = newState;
                    this.noMovie = false;
                } else {
                    this.movies = newState;
                    this.noMovie = true;
                }

            }
        },


        methods: {
            search(value) {
                this.searchParams = value;
            }
        },

        async beforeRouteEnter(to, from, next) {
            const { data } = await moviesService.getAll();
            next(vm => {
                vm.movies = [...data];
                vm.initMovies = [...data]
            })
        }
    }
</script>

<style scoped>

</style>