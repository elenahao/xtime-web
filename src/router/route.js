import Main from '@/components/Main.vue'
import routerChild from './components/index'
export default [{
        path: '/',
        name: 'home',
        component: Main,
        children: routerChild
    },
    {
        path: '/system',
        name: 'system',
        component: Main,
        children: routerChild
    },
    {
        path: '/user',
        name: 'user',
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
]