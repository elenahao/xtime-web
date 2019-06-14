export default [{
        path: "system/list",
        name: "系统列表",
        component: () => import( /* webpackChunkName: "baseInfo" */ '@/views/portal/System'),
        meta: {
            title: "breadcrumb",
            breadcrumb: [
                {
                    name: "总系统管理",
                },
                {
                    name: "基础信息",
                },
                {
                    name: "系统管理",
                },
                {
                    name: "系统列表",
                }
            ]
        }
    },
    {
        path: "user/list",
        component: () => import( /* webpackChunkName: "baseInfo" */ '@/views/portal/User'),
        meta: {
            title: "breadcrumb",
            breadcrumb: [{
                    name: "总系统管理",
                },
                {
                    name: "基础信息",
                },
                {
                    name: "用户管理",
                },
                {
                    name: "用户列表",
                }
            ]
        }
    },
    {
        path: "role/list",
        component: () => import( /* webpackChunkName: "baseInfo" */ '@/views/portal/Role'),
        meta: {
            title: "breadcrumb",
            breadcrumb: [{
                    name: "总系统管理",
                },
                {
                    name: "基础信息",
                },
                {
                    name: "角色管理",
                },
                {
                    name: "角色列表",
                }
            ]
        }
    },
    {
        path: "menu/list",
        component: () => import( /* webpackChunkName: "baseInfo" */ '@/views/portal/Permission'),
        meta: {
            title: "breadcrumb",
            breadcrumb: [{
                    name: "总系统管理",
                },
                {
                    name: "基础信息",
                },
                {
                    name: "菜单管理",
                },
                {
                    name: "菜单列表",
                }
            ]
        }
    }
]