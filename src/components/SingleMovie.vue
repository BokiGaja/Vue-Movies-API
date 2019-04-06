<template>
  <app-movie-row :movie="movie" :singleMovie="true"/>
</template>

<script>
  import MovieRow from './MovieRow'
  import {moviesService} from "../services/Movies";

  export default {
    name: "SingleMovie",
    components: {
      appMovieRow: MovieRow
    },
    data() {
      return {
        movie: null
      }
    },
    async beforeRouteEnter(to, from, next) {
      next(async (vm) => {
        const {data} = await moviesService.get(vm.$route.params.id);
        vm.movie = {...data};
      })
    },
  }
</script>
