<template>
  <div class="card text-center" :style="{margin: '10px auto', backgroundColor: selected ? 'grey' : ''}">
    <div class="card-header">
      Director: {{ movie.director }}
    </div>
    <div class="card-body">
      <h5 class="card-title">Title: {{ movie.title }}</h5>
      <img :src="movie.imageUrl" alt="">
      <p class="card-text">Duration: {{ movie.duration }} </p>
      <p class="card-text">Release Date: {{ movie.releaseDate }} </p>
      <p class="card-text">Genre: {{ movie.genre }} </p>
      <button class="btn btn-primary" @click="selectMovie(movie.id)">
        {{ selected ? 'Unselect' : 'Select Movie'}}
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MovieRow",
    props: {
      movie: Object,
      selectedAll: Boolean
    },
    data() {
      return {
        selected: false
      }
    },
    methods: {
      selectMovie() {
        if (!this.selected) {
          this.$emit('movieSelected');
          this.selected = true;
        } else {
          this.$emit('movieDeselected');
          this.selected = false;
        }
      }
    },
    watch: {
      selectedAll(newValue) {
        if (newValue) {
          if (!this.selected) {
            this.$emit('movieSelected');
            this.selected = true;
          }
        } else {
          if (this.selected) {
            this.$emit('movieDeselected');
            this.selected = false;
          }
        }
      }
    },
  }
</script>