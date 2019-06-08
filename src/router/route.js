import Main from '@/components/Main.vue'
import routerCont from './components/index'
export default [{
        path: '/',
        name: 'home',
        component: Main,
        children: routerCont
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
]