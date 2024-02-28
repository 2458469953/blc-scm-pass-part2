import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'


import VueRouter from 'vue-router'
import router from './router/index.js'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
