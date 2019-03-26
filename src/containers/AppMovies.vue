<template>
    <div class="container">
        <h1>Movies</h1>
        <ul v-for="movie in movies" :key="movie.id">
            <movie-row :movie="movie"/>
        </ul>
    </div>
</template>

<script>
    import { moviesService } from "../services/Movies"
    import MovieRow from '../components/MovieRow'
    export default {
        name: "Movies",
        data() {
            return {
                movies: []
            }
        },

        components: {
            MovieRow
        },

        async beforeRouteEnter(to, from, next) {
            const { data } = await moviesService.getAll();
            next(vm => {
                vm.movies = [...data]
            })
        }
    }
</script>

<style scoped>

</style>