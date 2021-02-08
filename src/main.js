import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VueParallaxy from 'vue-parallaxy'
import date from './filter/date'

import 'bootstrap'
import 'jquery'

axios.defaults.withCredentials = true;
Vue.component('VueParallaxy',VueParallaxy)
Vue.component('Loading',Loading);
Vue.use(VueAxios,axios);

Vue.filter('date' , date);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
    const api = `${process.env.VUE_APP_API_PATH}/api/user/check`;
    axios.post(api).then((response) => {  
      console.log(response.data); 
      if(response.data.success){
        next();
      }else{
        next({
          path: '/login'
        })
      }
    });
  }else{
    next();
  }
  
})