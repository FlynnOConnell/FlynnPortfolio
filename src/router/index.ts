import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/404',
            component: () => import('../views/404.vue'),
            meta: {
                title: '404',
            },
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/secondary/Contact.vue'),
            meta: {
                title: 'Contact Me',
            },
        },
        {
            path: '/science',
            name: 'science',
            component: () => import('../views/secondary/Science.vue'),
            meta: {
                title: 'Science',
            },
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('../views/secondary/Projects.vue'),
            meta: {
                title: 'Projects',
            },
        },
    ],
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 73,
            };
        } else if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };
    },
});

export default router;
