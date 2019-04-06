<template>
  <nav class="navbar navbar-dark bg-dark">
    <form class="form-inline" style="margin: auto">
      <router-link :to="{name: 'movies'}" class="btn btn-outline-success" type="button"
                   style="background-color: black; margin-right: 20px">Movies
      </router-link>
      <router-link :to="{name: 'addMovie'}" class="btn btn-outline-success" type="button"
                   style="background-color: black; margin-right: 20px">Add Movie
      </router-link>
      <movie-search/>
    </form>
  </nav>
</template>

<script>
  import MovieSearch from '../components/MovieSearch'
  export default {
    components: {
      MovieSearch
    }
  }
</script>