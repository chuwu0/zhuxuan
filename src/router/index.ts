import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Search from '../views/Search.vue';
import Gift from '../views/Gift.vue';
import MenuLayout from '@/layout/MenuLayout/index.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/layout/home'
    },
    {
        path: '/layout',
        name: 'layout',
        component: MenuLayout,
        redirect: '/layout/home',
        children: [
            {
                path: 'home',
                name: 'home',
                component: Home
            },
            {
                path: 'search',
                name: 'search',
                component: Search
            },
            {
                path: 'gift',
                name: 'gift',
                component: Gift
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
