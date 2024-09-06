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
import Speakers from "../views/speakers.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        redirect: '/home',
        component: HomeLayout,
        meta: {isGuest: true},
        children: [
            {
                path: '/home',
                name: 'Home',
                component: Home
            },
            {
                path: '/about',
                name: 'About',
                component: About
            },
            {
                path: '/committees',
                name: 'Committees',
                component: Committes
            },
            {
                path: '/speakers',
                name: 'Speakers',
                component: Speakers
            },
            {
                path: '/schedule',
                name: 'Schedule',
                component: Schedule
            },
            {
                path: '/auth',
                redirect: '/login',
                name: 'Auth',
                component: AuthLayout,
                meta: {isGuest: true},
                children: [
                    {
                        path: '/login',
                        name: 'Login',
                        component: Login
                    },
                    {
                        path: '/register',
                        name: 'Register',
                        component: Register
                    }
                ]
            }
        ]
    },
    {
        path: '/',
        redirect: '/dashboard',
        component: DefaultLayout,
        meta: {requiresAuth: true},
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: '/surveys',
                name: 'Surveys',
                component: Surveys
            }
        ]
    },
    // {
    //     path: '/auth',
    //     redirect: '/login',
    //     name: 'Auth',
    //     component: AuthLayout,
    //     meta: {isGuest: true},
    //     children: [
    //         {
    //             path: '/login',
    //             name: 'Login',
    //             component: Login
    //         },
    //         {
    //             path: '/register',
    //             name: 'Register',
    //             component: Register
    //         }
    //     ]
    // }
    
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