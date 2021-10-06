import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/home',
        name: 'Introduction',
        component: () => import(/* webpackChunkName: "qq" */ '../views/QuantumComputers.vue'),
        meta: {icon: 'mdi-home'}
    },
    {
        path: '/super',
        name: 'Super Conductors',
        component: () => import(/* webpackChunkName: "sc" */ '../views/Superconductors.vue'),
        meta: {icon: 'mdi-magnet-on'}
    },
    {
        path: '/cat',
        name: 'Super Position',
        component: () => import(/* webpackChunkName: "sp" */ '../views/SuperPosition.vue'),
        meta: {icon: 'mdi-atom'}
    },
    {path: '*', redirect: '/home', meta: {hidden: true}}
]

const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
});
export default router
