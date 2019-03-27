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
Vue.prototype.$sortArrAlphabetically = ((property, type) => {
  if (type === 'desc') property = '-' + property;
  let sortOrder = 1;
  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }
  return (a,b) => {
    if (sortOrder === -1) {
      return b[property].localeCompare(a[property])
    } else {
      return a[property].localeCompare(b[property]);
    }
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
