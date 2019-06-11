import Home from "@/views/Home.vue"
import Menu1 from "@/views/menu1.vue"
import Menu2 from "@/views/menu2.vue"
import System13 from "@/views/system13.vue"
import System21 from "@/views/system21.vue"
import System22 from "@/views/system22.vue"
import System23 from "@/views/system23.vue"
export default [
    {
        path: "/",
        component: Home
    },
    {
        path: "/system/menu1",
        component: Menu1
    },
    {
        path: "/system/menu2",
        component: Menu2
    },
    {
        path: "/system13",
        component: System13
    },
    {
        path: "/system21",
        component: System21
    },
    {
        path: "/system22",
        component: System22
    },
    {
        path: "/system23",
        component: System23
    }
]