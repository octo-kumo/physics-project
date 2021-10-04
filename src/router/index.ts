import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import QuantumComputers from '../views/QuantumComputers.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/home',
        name: 'Quantum Computers',
        component: QuantumComputers
    },
    {
        path: '/super',
        name: 'Super Conductors',
        component: () => import(/* webpackChunkName: "about" */ '../views/Superconductors.vue')
    },

    {path: '*', redirect: '/home', meta: {hidden: true}}
]

const router = new VueRouter({
    routes
})

export default router
