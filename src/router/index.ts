import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'About',
            component: MainView,
        },
        {
            path: '/404',
            component: () => import('../views/NotFound.vue'),
            meta: {
                title: '404 not found',
            },
        },
        {
            path: '/contact',
            name: 'Contact',
            component: () => import('../views/ContactView.vue'),
            meta: {
                title: 'Contact Me',
            },
        },
        {
            path: '/scientist',
            name: 'UnderScience',
            component: () => import('../views/underview/UnderScience.vue'),
            meta: {
                title: 'UnderScience',
            },
        },
        {
            path: '/Engineer',
            name: 'UnderEngineer',
            component: () => import('../views/underview/UnderEngineer.vue'),
            meta: {
                title: 'UnderEngineer',
            },
        },
    ],
});

export default router;
