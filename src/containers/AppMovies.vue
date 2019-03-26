<template>
    <div class="container">
        <h1>Movies</h1>
        <movie-search @searching="search"/>
        <!-- Movies counter -->
        <div class="card text-white bg-success mb-3" style="max-width: 18rem; margin: auto" v-if="moviesCounter>0">
            <div class="card-header" style="text-align: center">Movies counted</div>
            <div class="card-body">
                <h5 class="card-title" style="text-align: center">{{ moviesCounter }}</h5>
            </div>
        </div>
        <!-- Buttons -->
        <button class="btn btn-success" @click="selectedAll = true">Select All</button>
        <button class="btn btn-danger" @click="selectedAll = false">Deselect All</button>
        <br>
        <button class="btn btn-info" @click="sortArr('nameAsc')">Sort by Name asc</button>
        <button class="btn btn-info" @click="sortArr('nameDesc')">Sort by Name desc</button>
        <br>
        <button class="btn btn-info" @click="sortArr('durAsc')">Sort by Duration asc</button>
        <button class="btn btn-info" @click="sortArr('durDesc')">Sort by Duration desc</button>
        <!-- Movies -->
        <ul v-for="(movie, index) in movies" :key="movie.id" v-if="index+1 <= currPage*5 && index+1 > (currPage-1)*5">
            <movie-row
                    :selectedAll="selectedAll"
                    :movie="movie"
                    @movieSelected="moviesCounter++"
                    @movieDeselected="moviesCounter--"
            />
        </ul>
        <div class="container">
            <div class="row" style="width: 100px; margin: auto" >
                <button v-for="(movie, index) in movies" :key="movie.id" class="btn btn-primary col" @click="changePage(index+1 )"
                        v-if="index < movies.length/5">
                    {{ index+1 }}</button>
            </div>
        </div>
        <!-- This can be separate component -->
        <div v-if="noMovie" style="background-color: red; width: 300px; border-radius: 10%; margin: auto; color: white">
            There is no movie you are looking for
        </div>
    </div>
</template>


<script>
    import { moviesService } from "../services/Movies"
    import MovieRow from '../components/MovieRow'
    import MovieSearch from '../components/MovieSearch'
    export default {
        name: "Movies",
        data() {
            return {
                movies: [],
                initMovies: [],
                searchParams: '',
                noMovie: false,
                moviesCounter: 0,
                selectedAll: null,
                currPage: 1
            }
        },
        components: {
            MovieRow,
            MovieSearch
        },
        watch: {
            searchParams(newValue, oldValue) {
                let oldState = [...this.initMovies];
                let newState = oldState.filter(movie => movie.title.includes(this.searchParams));
                if (newState.length > 0) {
                    this.movies = newState;
                    this.noMovie = false;
                } else {
                    this.movies = newState;
                    this.noMovie = true;
                }
            },
        },
        methods: {
            search(value) {
                this.searchParams = value;
            },

            sortArr(name) {
                let oldState = [...this.initMovies];
                if (name === 'nameAsc') {
                    this.movies = oldState.sort(this.$sortArrAlphabetically('title'));
                }
                if (name === 'nameDesc') {
                    this.movies = oldState.sort(this.$sortArrAlphabetically('-title'));
                }
                if (name === 'durAsc') {
                    const newState = oldState.map(el => {
                        return {
                        ...el,
                        duration: parseInt(el.duration)
                        }
                    });
                    this.movies = newState.sort((a,b) => a.duration > b.duration ? 1 : -1);
                }
                if (name === 'durDesc') {
                    const newState = oldState.map(el => {
                        return {
                        ...el,
                        duration: parseInt(el.duration)
                        }
                    });
                    this.movies = newState.sort((a,b) => a.duration < b.duration ? 1 : -1);
                }
            },
            changePage(nextPage) {
                this.currPage = nextPage;
            }
        },
        async beforeRouteEnter(to, from, next) {
            const { data } = await moviesService.getAll();
            next(vm => {
                vm.movies = [...data];
                vm.initMovies = [...data]
            })
        }
    }
</script>