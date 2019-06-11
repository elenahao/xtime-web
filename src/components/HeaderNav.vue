<template>
    <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
    >
        <!-- <el-menu-item index="1"><router-link to="/system1">系统一</router-link></el-menu-item> -->
        <el-submenu v-for="(item, index) of menuList" :key="index" :index="item.index">
            <template slot="title">{{item.title}}</template>
            <el-menu-item v-for="(cItem, cIndex) of item.children" :key="cIndex" :index="cItem.index">
                <router-link :to="cItem.router">{{cItem.title}}</router-link>
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>
<script>
export default {
    data() {
        return {
            menuList: [
                {
                    title: "总系统管理",
                    index: "1",
                    children: [
                        {
                            title: "用户管理",
                            index: "1-1",
                            router: "/user"
                        },
                        {
                            title: "角色管理",
                            index: "1-2",
                            router: "/role"
                        },
                        {
                            title: "权限管理",
                            index: "1-3",
                            router: "/authority"
                        },
                        {
                            title: "系统管理",
                            index: "1-4",
                            router: "/system"
                        }
                    ]
                },
                {
                    title: "核心系统",
                    index: "2",
                    children: [
                        {
                            title: "会员管理",
                            index: "2-1",
                            router: "/member"
                        },
                        {
                            title: "卖品管理",
                            index: "2-2",
                            router: "/snack"
                        }
                    ]
                },
                {
                    title: "票务系统",
                    index: "3",
                    children: [
                        {
                            title: "影片管理",
                            index: "3-1",
                            router: "/movie"
                        },
                        {
                            title: "数据匹配",
                            index: "3-2",
                            router: "/match"
                        },
                        {
                            title: "排期管理",
                            index: "3-3",
                            router: "/showtime"
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>
