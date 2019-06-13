<template>
    <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
        <!-- <el-menu-item index="1"><router-link to="/system1">系统一</router-link></el-menu-item> -->
        <el-submenu v-for="(item, index) of menuList" :key="index" :index="item.index" :code="item.code">
            <template slot="title">{{item.title}}</template>
            <el-menu-item v-for="(cItem, cIndex) of item.children" :key="cIndex" :index="cItem.index" :code="item.code">
                <router-link @click.native="changeSysAndFirst({system: item.title, first: cItem.title, systemCode: item.code, firstMenuCode: cItem.code})" :to="cItem.router">{{cItem.title}}</router-link>
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
                    code: "portal",
                    children: [
                        {
                            title: "基础信息",
                            index: "1-1",
                            code: "baseInfo",
                            router: "/portal/baseInfo"
                        },
                        {
                            title: "个人信息",
                            index: "1-2",
                            code: "personInfo",
                            router: "/portal/personInfo"
                        }
                    ]
                },
                {
                    title: "核心系统",
                    index: "2",
                    code: "cmc",
                    children: [
                        {
                            title: "会员管理",
                            index: "2-1",
                            code: "member",
                            router: "/cmc/member"
                        },
                        {
                            title: "卖品管理",
                            index: "2-2",
                            code: "member",
                            router: "/cmc/snack"
                        }
                    ]
                },
                {
                    title: "票务系统",
                    index: "3",
                    code: "ticket",
                    children: [
                        {
                            title: "影片管理",
                            index: "3-1",
                            code: "movie",
                            router: "/ticket/movie"
                        },
                        {
                            title: "数据匹配",
                            index: "3-2",
                            code: "match",
                            router: "/ticket/match"
                        },
                        {
                            title: "排期管理",
                            index: "3-3",
                            code: "showtime",
                            router: "/ticket/showtime"
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        ...mapMutations('global', ['changeSysAndFirst'])
    }
};
</script>
