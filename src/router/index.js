import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Post from '../pages/Post.vue'
import About from '../pages/About.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    /*{
        path: '/post',
        name: 'Post',
        component: Post
    },*/
    {
        path: '/post/:id?',
        name: 'Post',
        component: Post
    },
    
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
