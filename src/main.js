import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import { router } from "./routes"
import VueRouter from 'vue-router'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
