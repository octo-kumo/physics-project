import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import QuantumComputers from '../views/QuantumComputers.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/home',
        name: 'Introduction',
        component: QuantumComputers,
        meta: {icon:'mdi-home'}
    },
    {
        path: '/super',
        name: 'Super Conductors',
        component: () => import(/* webpackChunkName: "about" */ '../views/Superconductors.vue'),
        meta: {icon:'mdi-magnet-on'}
    },

    {path: '*', redirect: '/home', meta: {hidden: true}}
]

const router = new VueRouter({
    routes
})

export default router
