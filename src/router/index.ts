import { createRouter, createWebHistory } from 'vue-router';
import AboutMe from '../views/AboutMe.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/about-me',
        },
        {
            path: '/home',
            redirect: '/about-me',
        },
        {
            path: '/about-me',
            name: 'landing-page',
            component: AboutMe,
        },
        {
            path: '/mobile',
            name: 'mobile-landing-page',
            component: () => import('../views/Mobile.vue'),
        },
        {
            path: '/404',
            component: () => import('../views/secondary/404.vue'),
            meta: {
                title: '404',
            },
        },
        {
            path: '/experience',
            name: 'experience',
            component: () => import('../views/Main.vue'),
            meta: {
                title: 'Experience',
            },
            children: [
                {
                    path: 'publications',
                    name: 'publications',
                    component: () => import('../components/experience/Publications.vue'),
                },
                {
                    path: 'projects',
                    name: 'projects',
                    component: () => import('../components/experience/Projects.vue'),
                },
                {
                    path: 'resume',
                    name: 'resume',
                    component: () => import('../components/experience/Resume.vue'),
                },
            ],
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
