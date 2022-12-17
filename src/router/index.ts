import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
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
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                top: 5,
                behavior: 'smooth',
            };
        }
        if (savedPosition) {
            return savedPosition;
        }
    },
});

export default router;
