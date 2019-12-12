import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from "../views/login.vue"
import SpaceComponent from "../views/space.vue"
import RegisterComponent from "../views/register.vue"
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
        },
        {
            path: "/register",
            name: "register",
            component: RegisterComponent
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (!isAuthenticated) next('/login')
    else next()
  })

export default router  


