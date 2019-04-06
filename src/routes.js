import VueRouter from 'vue-router';
import AppMovies from './containers/AppMovies';
import AddMovie from './components/AddMovie'
import Login from './components/Auth/AppLogin'
import Logout from './components/Auth/AppLogout'
import Register from './components/Auth/AppRegister'
import SingleMovie from './components/SingleMovie'

const routes = [
  {path: '*', redirect: '/movies'},
  {path: '/movies/:id', name: 'singleMovie', component: SingleMovie, meta: {requiresAuth: true}},
  {path: '/movies', name: 'movies', component: AppMovies, meta: {requiresAuth: true}},
  {path: '/add', name: 'addMovie', component: AddMovie, meta: {requiresAuth: true}},
  {path: '/login', name: 'login', component: Login, meta: {requiresGuest: true}},
  {path: '/logout', name: 'logout', component: Logout, meta: {requiresAuth: true}},
  {path: '/register', name: 'register', component: Register, meta: {requiresGuest: true}},
];

export const router = new VueRouter({
  mode: 'history',
  routes
});