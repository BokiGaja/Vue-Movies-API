<template>
  <div class="active-cyan-3 active-cyan-4 mb-4" style="width: 400px; margin: auto">
    <input class="form-control" type="text" placeholder="Search Movie" aria-label="Search" v-model="searchParams">
  </div>
</template>

<script>
  export default {
    name: "MovieSearch",
    data() {
      return {
        searchParams: ''
      }
    },
    watch: {
      searchParams(newValue, oldValue) {
        this.$emit('searching', this.searchParams);
      }
    },
  }
</script>