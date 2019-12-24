import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import '../theme/index.css'
import elementUI from 'element-ui'
import Vuetify from 'vuetify'

// server ip in production
Vue.config.productionTip = false

Vue.use(elementUI)
Vue.use(Vuetify)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
