import VueRouter from 'vue-router';
import AppMovies from './containers/AppMovies';
import AddMovie from './components/AddMovie'

const routes = [
    { path: '*', redirect: '/movies'},
    { path: '/movies', name: 'movies', component: AppMovies},
    { path: '/add', name: 'addMovie', component: AddMovie},
];

export const router = new VueRouter({
    mode: 'history',
    routes
});