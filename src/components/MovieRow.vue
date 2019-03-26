<template>
        <div class="card text-center" :style="{margin: '10px auto', backgroundColor: selected ? 'grey' : ''}">
            <div class="card-header">
                Director: {{ movie.director }}
            </div>
            <div class="card-body">
                <h5 class="card-title">Title: {{ movie.title }}</h5>
                <p class="card-text">ImageUrl: {{ movie.imageUrl }} </p>
                <p class="card-text">Duration: {{ movie.duration }} </p>
                <p class="card-text">Release Date: {{ movie.releaseDate }} </p>
                <p class="card-text">Genre: {{ movie.genre }} </p>
                <button class="btn btn-primary" @click="selectMovie(movie.id)">
                    {{ selected ? 'Unselect' : 'Select Movie'}}</button>
            </div>
        </div>
</template>

<script>
    export default {
        name: "MovieRow",
        props: {
            movie: {},
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
    }
</script>

<style scoped>

</style>