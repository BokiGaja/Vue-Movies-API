import VueRouter from 'vue-router';
import AppMovies from './containers/AppMovies';
import AddMovie from './components/AddMovie'
import Login from './components/Auth/AppLogin'
import Logout from './components/Auth/AppLogout'

const routes = [
    { path: '*', redirect: '/movies'},
    { path: '/movies', name: 'movies', component: AppMovies},
    { path: '/add', name: 'addMovie', component: AddMovie},
    {path: '/login', name: 'login', component: Login},
    {path: '/logout', name: 'logout', component: Logout},
];

export const router = new VueRouter({
    mode: 'history',
    routes
});