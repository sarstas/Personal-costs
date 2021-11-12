import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: () => import(/*webpackChunkName: "Page Board"*/ '@/views/Dashboard')
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import(/*webpackChunkName: "PageBoard"*/ '@/views/Dashboard')
        },
        {
            path: '/:action/:category',
            name: 'dashboard',
            component: () => import(/*webpackChunkName: "PageBoard"*/ '@/views/Dashboard')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/*webpackChunkName: "About"*/ '@/views/About')
        },
        {
            path: '/404',
            name: 'notFound',
            component: () => import(/*webpackChunkName: "NotFound"*/ '@/views/NotFound')
        },
        {
            path: '*',
            redirect: '/404'
        },
    ]
});

const titles = {
    dashboard: 'Dashboard',
    about: 'About',
    notFound: 'Not Found',
};

router.afterEach((to) => {
    document.title = titles[to.name];
});

export default router;

