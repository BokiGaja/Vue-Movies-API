<template>
  <div>
    <form @submit.prevent="addMovie">
      <div>
        <input type="text" v-model="movie.title" placeholder="Title">
      </div>
      <div>
        <input type="text" v-model="movie.director" placeholder="Director">
      </div>
      <div>
        <input type="text" v-model="movie.genre" placeholder="Genre">
      </div>
      <div>
        <input type="text" v-model="movie.imageUrl" placeholder="Image URL">
      </div>
      <div>
        <input type="number" v-model="movie.duration" placeholder="Duration">
      </div>
      <div>
        <input type="date" v-model="movie.releaseDate" placeholder="Release Date">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div class="alert alert-danger" role="alert" v-if="error">
      {{alertMessage}}
    </div>
  </div>
</template>

<script>
  import {moviesService} from "../services/Movies";

  export default {
    name: "",
    data() {
      return {
        movie: {
          director: '',
          title: '',
          imageUrl: '',
          duration: '',
          releaseDate: '',
          genre: ''
        },
        error: false,
        alertMessage: ''
      }
    },
    methods: {
      async addMovie() {
        const {data} = await moviesService.createMovie(this.movie);
        if (data) {
          this.error = true;
          this.alertMessage = data;
        } else {
          this.$router.push('/movies');
        }
      }
    },
  }
</script>