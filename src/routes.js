import VueRouter from 'vue-router';
import AppMovies from './containers/AppMovies';
import AddMovie from './components/AddMovie'
import Login from './components/Auth/AppLogin'
import Logout from './components/Auth/AppLogout'
import Register from './components/Auth/AppRegister'
import SingleMovie from './components/SingleMovie'

const routes = [
    { path: '*', redirect: '/movies'},
    { path: '/movies/:id', name: 'singleMovie', component: SingleMovie},
    { path: '/movies', name: 'movies', component: AppMovies},
    { path: '/add', name: 'addMovie', component: AddMovie},
    {path: '/login', name: 'login', component: Login},
    {path: '/logout', name: 'logout', component: Logout},
    {path: '/register', name: 'register', component: Register},
];

export const router = new VueRouter({
    mode: 'history',
    routes
});