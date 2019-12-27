import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import '../theme/index.css'
import elementUI from 'element-ui'
import Vuetify from 'vuetify'
import axios from 'axios';

// change the default content type of axios
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;

// server ip in production
Vue.config.productionTip = false

Vue.use(elementUI)
Vue.use(Vuetify)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
