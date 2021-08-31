import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
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
