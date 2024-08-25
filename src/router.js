import { createRouter, createWebHistory } from "vue-router";

import PageHome from './pages/PageHome.vue';
import PageDetails from './pages/PageDetails.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: PageHome
        },
        {
            path: '/project/:id',
            name: 'project-details',
            component: PageDetails
        }
    ]
})

export {router}