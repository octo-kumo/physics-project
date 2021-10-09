import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
        meta: {icon: 'mdi-home'}
    },
    {
        path: '/math',
        name: 'Quantum Computers',
        component: () => import(/* webpackChunkName: "qq" */ '../views/QuantumComputers.vue'),
        meta: {icon: 'mdi-laptop'}
    },
    {
        path: '/super',
        name: 'Superconductors',
        component: () => import(/* webpackChunkName: "sc" */ '../views/Superconductors.vue'),
        meta: {icon: 'mdi-magnet-on'}
    },
    {
        path: '/cat',
        name: 'Quantum Physics',
        component: () => import(/* webpackChunkName: "sp" */ '../views/SuperPosition.vue'),
        meta: {icon: 'mdi-atom'}
    },
    {path: '*', redirect: 'home', meta: {hidden: true}}
]

const router = new VueRouter({
    mode: 'history',
    base: '/physics-project',
    routes
})
router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
});
export default router
