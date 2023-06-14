import { createRouter,createWebHistory } from "vue-router";
import homePage from '../views/homePage.vue'
import aboutPage from '../views/aboutPage.vue'
import teamPage from '../views/teamPage.vue'
import contactPage from '../views/contactPage.vue'

const router = createRouter ({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component: homePage
        },
        {
            path:'/about',
            name:'about',
            component: aboutPage
        },
        {
            path:'/team',
            name:'team',
            component: teamPage
        },
        {
            path:'/contact',
            name:'contact',
            component: contactPage
        }
    ]
})

export default router;