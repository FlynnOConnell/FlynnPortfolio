import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
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
            path: '/why-though',
            name: 'why',
            component: () => import('../views/secondary/Why.vue'),
            meta: {
                title: 'Why?',
            },
        },
        {
            path: '/publications',
            name: 'publications',
            component: () => import('../views/secondary/Publications.vue'),
            meta: {
                title: 'Publications',
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
        {
            path: '/resume',
            name: 'resume',
            component: () => import('../views/secondary/Resume.vue'),
            meta: {
                title: 'Resume',
            },
        },
    ],
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior(to, from, savedPosition) {
        const offset = parseInt(to.query.offset as string) || 0;
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
                top: offset,
            };
        } else if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0, behavior: 'smooth' };
    },
});

export default router;
