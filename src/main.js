import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import '../theme/index.css'
import elementUI from 'element-ui'

// server ip in production
Vue.config.productionTip = false

Vue.use(elementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
