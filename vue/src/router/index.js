import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import DefaultLayout from "../components/UserLayout.vue";
import AuthLayout from "../components/AuthLayout.vue";
import HomeLayout from "../components/HomeLayout.vue";
import Surveys from "../views/Surveys.vue";
import Home from "../views/Home.vue";
import store from "../store";
import Committes from "../views/Committes.vue";
import About from "../views/About.vue";
import Schedule from "../views/Schedule.vue";
import Speakers from "../views/Speakers.vue";
import Venue from "../views/Venue.vue";

const routes = [
    {
        path: '/icomet2025/',
        name: 'Home',
        redirect: '/icomet2025/home',
        component: HomeLayout,
        meta: {isGuest: true},
        children: [
            {
                path: '/icomet2025/home',
                name: 'Home',
                component: Home
            },
            {
                path: '/icomet2025/about',
                name: 'About',
                component: About
            },
            {
                path: '/icomet2025/committees',
                name: 'Committees',
                component: Committes
            },
            {
                path: '/icomet2025/speakers',
                name: 'Speakers',
                component: Speakers
            },
            {
                path: '/icomet2025/venue',
                name: 'Venue',
                component: Venue
            },
            {
                path: '/icomet2025/schedule',
                name: 'Schedule',
                component: Schedule
            },
            {
                path: '/icomet2025/auth',
                redirect: '/icomet2025/login',
                name: 'Auth',
                component: AuthLayout,
                meta: {isGuest: true},
                children: [
                    {
                        path: '/icomet2025/login',
                        name: 'Login',
                        component: Login
                    },
                    {
                        path: '/icomet2025/register',
                        name: 'Register',
                        component: Register
                    }
                ]
            }
        ]
    },
    {
        path: '/icomet2025/',
        redirect: '/icomet2025/dashboard',
        component: DefaultLayout,
        meta: {requiresAuth: true},
        children: [
            {
                path: '/icomet2025/dashboard',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: '/icomet2025/surveys',
                name: 'Surveys',
                component: Surveys
            }
        ]
    },    
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next)=>{
    if (to.meta.requiresAuth && !store.state.user.token){
        next({name: 'Login'})
    // }else if (store.state.user.token && (to.meta.isGuest)){
    //     next({name: 'Dashboard'});
    }else{
        next();
    }
})

export default router