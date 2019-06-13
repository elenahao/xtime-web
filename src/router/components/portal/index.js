import Home from "@/views/Home.vue"
import User from "@/views/mainSystem/User.vue"
import Role from "@/views/mainSystem/Role.vue"
import Permisstion from "@/views/mainSystem/Permisstion.vue"
import System from "@/views/mainSystem/System.vue"
import Password from "@/views/mainSystem/Password.vue"
import Data from "@/views/mainSystem/Data.vue"
export default [
    {
        path: "/baseInfo",
        component: Home
    },
    {
        path: "/personInfo",
        component: Home
    },
    {
        path: "/baseInfo/user/list",
        component: User
    },
    {
        path: "/baseInfo/role/list",
        component: Role
    },
    {
        path: "/baseInfo/permisstion/list",
        component: Permisstion
    },
    {
        path: "/baseInfo/system/list",
        component: System
    },
    {
        path: "/personInfo/password/reset",
        component: Password
    },
    {
        path: "/personInfo/data/reset",
        component: Data
    }
]