<template>
    <div class="nav">
        <el-menu default-active="2"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
            <el-submenu v-for="(item, index) of sidebarList" :key="index" :index="item.index">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>{{item.title}}</span>
                </template>
                <el-menu-item v-for="(cItem, index) of item.children" :key="index" :index="cItem.index">
                    <router-link :to="cItem.router">{{cItem.title}}</router-link>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
    name: 'Nav',
    data () {
        return {
            sidebarList: [
                {
                    title: "系统管理",
                    index: "1-1-1",
                    code: "system",
                    children: [
                        {
                            title: "系统列表",
                            index: "1-1-1-1",
                            code: "list",
                            router: "/portal/baseInfo/system/list"
                        }
                    ]
                },
                {
                    title: "角色管理",
                    index: "1-1-2",
                    code: "role",
                    children: [
                        {
                            title: "角色列表",
                            index: "1-1-2-1",
                            code: "list",
                            router: "/portal/baseInfo/role/list"
                        }
                    ]
                },
                {
                    title: "菜单管理",
                    index: "1-1-3",
                    code: "menu",
                    children: [
                        {
                            title: "菜单列表",
                            index: "1-1-3-1",
                            code: "list",
                            router: "/portal/baseInfo/menu/list"
                        }
                    ]
                },
                {
                    title: "用户管理",
                    index: "1-1-4",
                    code: "user",
                    children: [
                        {
                            title: "用户列表",
                            index: "1-1-4-1",
                            code: "list",
                            router: "/portal/baseInfo/user/list"
                        }
                    ]
                }
            ]
        }
    },
    computed: {
        ...mapState('global', ['system', 'firstLevelMenu']),
        ...mapGetters('global', ['getSysAndFirst'])
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        }
    },
    watch: {
        getSysAndFirst: function (val) {
            console.log(val);
            //调用接口获取url对应的左侧菜单栏数据
            if('portal>personInfo' == val){
                this.sidebarList = [
                    {
                        title: "修改密码",
                        index: "1-2-1",
                        code: "password",
                        children: [
                            {
                                title: "重置密码",
                                index: "1-2-1-1",
                                code: "reset",
                                router: "/portal/personInfo/password/reset"
                            }
                        ]
                    },
                    {
                        title: "个人信息",
                        index: "1-2-2",
                        code: "data",
                        children: [
                            {
                                title: "信息列表",
                                index: "1-2-2-1",
                                code: "list",
                                router: "/portal/personInfo/data/list"
                            }
                        ]
                    }
                ];
            }

        }
    }
}
</script>
<style lang="scss" scoped>
.el-menu{
    border-right: 0;
}
</style>
