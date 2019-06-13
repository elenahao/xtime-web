import Home from "@/views/Home.vue"
import User from "@/views/portal/User.vue"
import Role from "@/views/portal/Role.vue"
import Permisstion from "@/views/portal/Permission.vue"
import System from "@/views/portal/System.vue"
import Password from "@/views/portal/Password.vue"
import Data from "@/views/portal/Data.vue"
import Member from "@/views/cmc/Member.vue"
import Snack from "@/views/cmc/Snack.vue"
import Match from "@/views/ticket/Match.vue"
import Movie from "@/views/ticket/Movie.vue"
import Showtime from "@/views/ticket/Showtime.vue"
export default [
    {
        path: "/portal/baseInfo",
        component: Home
    },
    {
        path: "/portal/personInfo",
        component: Home
    },
    {
        path: "/portal/baseInfo/user/list",
        component: User
    },
    {
        path: "/portal/baseInfo/role/list",
        component: Role
    },
    {
        path: "/portal/baseInfo/permisstion/list",
        component: Permisstion
    },
    {
        path: "/portal/baseInfo/system/list",
        component: System
    },
    {
        path: "/portal/personInfo/password/reset",
        component: Password
    },
    {
        path: "/portal/personInfo/data/list",
        component: Data
    },
    {
        path: "/cmc/member",
        component: Home
    },
    {
        path: "/cmc/snack",
        component: Home
    },
    {
        path: "/cmc/member/manage/list",
        component: Member
    },
    {
        path: "/cmc/snack/manage/list",
        component: Snack
    },
    {
        path: "/ticket/match",
        component: Home
    },
    {
        path: "/ticket/movie",
        component: Home
    },
    {
        path: "/ticket/showtime",
        component: Home
    },
    {
        path: "/ticket/match/manage/list",
        component: Match
    },
    {
        path: "/ticket/movie/manage/list",
        component: Movie
    },
    {
        path: "/ticket/showtime/manage/list",
        component: Showtime
    }
]