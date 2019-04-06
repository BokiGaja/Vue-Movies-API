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
      <router-link :to="{name: 'login'}" class="btn btn-outline-success" type="button"
                   style="background-color: black; margin-right: 20px" v-if="!loggedIn">Login
      </router-link>
      <router-link :to="{name: 'logout'}"  class="btn btn-outline-success" style="background-color: black; margin-right: 20px" v-if="loggedIn">
        Logout
      </router-link>
      <router-link :to="{name: 'register'}" class="btn btn-outline-success" type="button"
                   style="background-color: black; margin-right: 20px" v-if="!loggedIn">Register
      </router-link>
    </form>
  </nav>
</template>

<script>
  import MovieSearch from '../components/MovieSearch'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapGetters(['loggedIn'])
    },
    components: {
      MovieSearch
    },
  }
</script>