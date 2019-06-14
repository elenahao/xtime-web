export default [{
        path: "password/reset",
        component: () => import( /* webpackChunkName: "personInfo" */ '@/views/portal/Password')
    },
    {
        path: "data/list",
        component: () => import( /* webpackChunkName: "personInfo" */ '@/views/portal/UserData')
    }
]