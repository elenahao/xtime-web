import Home from "@/views/Home.vue"
import User from "@/views/mainSystem/User.vue"
import Role from "@/views/mainSystem/Role.vue"
import System from "@/views/mainSystem/System.vue"
import Member from "@/views/cmc/Member.vue"
import Snack from "@/views/cmc/Snack.vue"
import Match from "@/views/ticket/Match.vue"
import Movie from "@/views/ticket/Movie.vue"
import Showtime from "@/views/ticket/Showtime.vue"
export default [
    {
        path: "/",
        component: Home
    },
    {
        path: "/user",
        component: User
    },
    {
        path: "/role",
        component: Role
    },
    {
        path: "/system",
        component: System
    },
    {
        path: "/member",
        component: Member
    },
    {
        path: "/snack",
        component: Snack
    },
    {
        path: "/match",
        component: Match
    },
    {
        path: "/movie",
        component: Movie
    },
    {
        path: "/showtime",
        component: Showtime
    }
]