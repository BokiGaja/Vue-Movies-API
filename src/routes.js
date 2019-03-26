import VueRouter from 'vue-router';
import AppMovies from './components/AppMovies';

const routes = [
    { path: '*', redirect: '/movies'},
    { path: '/movies', name: 'movies', component: AppMovies},
];

export const router = new VueRouter({
    mode: 'history',
    routes
});