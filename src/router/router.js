import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from "../views/login.vue"
import SpaceComponent from "../views/space.vue"
import isAuthenticated from "../App.vue"

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/space",
            name: "space",
            component: SpaceComponent
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (!isAuthenticated) next('/login')
    else next()
  })

export default router  


