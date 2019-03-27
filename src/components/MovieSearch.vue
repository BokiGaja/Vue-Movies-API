<template>
  <div class="active-cyan-3 active-cyan-4 mb-4" style="width: 400px; margin: auto">
    <input @input="changeSearchParams(searchParams)" class="form-control" type="text" placeholder="Search Movie"
           aria-label="Search" v-model="searchParams">
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: "MovieSearch",
    data() {
      return {
        searchParams: ''
      }
    },
    methods: {
      ...mapActions([
        'changeSearchParams'
      ])
    },
  }
</script>