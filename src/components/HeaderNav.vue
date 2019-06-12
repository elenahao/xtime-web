<template>
    <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
        <!-- <el-menu-item index="1"><router-link to="/system1">系统一</router-link></el-menu-item> -->
        <el-submenu v-for="(item, index) of menuList" :key="index" :index="item.index">
            <template slot="title">{{item.title}}</template>
            <el-menu-item v-for="(cItem, cIndex) of item.children" :key="cIndex" :index="cItem.index">
                <router-link class="menu-title-link" @click.native="changeMenu(item.title, cItem.title)" :to="cItem.router">{{cItem.title}}</router-link>
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            menuList: [
                {
                    title: "总系统管理",
                    index: "1",
                    children: [
                        {
                            title: "基础信息",
                            index: "1-1",
                            router: "/portal/baseInfo"
                        },
                        {
                            title: "个人信息",
                            index: "1-2",
                            router: "/portal/personInfo"
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
                            router: "/cmc/member"
                        },
                        {
                            title: "卖品管理",
                            index: "2-2",
                            router: "/cmc/snack"
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
                            router: "/ticket/movie"
                        },
                        {
                            title: "数据匹配",
                            index: "3-2",
                            router: "/ticket/match"
                        },
                        {
                            title: "排期管理",
                            index: "3-3",
                            router: "/ticket/showtime"
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        ...mapMutations('global', ['changeSysAndFirst']),
        changeMenu (system, first) {
            this.changeSysAndFirst({system: system, first: first});
        }
    },
    watch: {
        $route(){
            console.log(this.$route.path);
        }
    }
};
</script>
<style lang="scss" scoped>
.menu-title-link{
    display: block;
    width: 100%;
    height: 100%;
}
</style>
