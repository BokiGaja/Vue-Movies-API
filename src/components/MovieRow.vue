<template>
        <div class="card text-center" style="margin: 10px auto">
            <div class="card-header">
                Director: {{ movie.director }}
            </div>
            <div class="card-body">
                <h5 class="card-title">Title: {{ movie.title }}</h5>
                <p class="card-text">ImageUrl: {{ movie.imageUrl }} </p>
                <p class="card-text">Duration: {{ movie.duration }} </p>
                <p class="card-text">Release Date: {{ movie.releaseDate }} </p>
                <p class="card-text">Genre: {{ movie.genre }} </p>
            </div>
        </div>
</template>

<script>
    export default {
        name: "MovieRow",
        props: {
            movie: {}
        }
    }
</script>

<style scoped>

</style>