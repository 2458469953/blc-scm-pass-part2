import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import router from './router/index.js'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
<<<<<<< HEAD
  router,
=======
  el: '#app',
>>>>>>> 1e23d15b2251b7951d5b05449c0bd14d5ff6d31c
  render: h => h(App),
}).$mount('#app')
