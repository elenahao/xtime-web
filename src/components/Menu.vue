<template>
    <el-menu class="el-menu-demo"
             mode="horizontal"
             background-color="#099cec"
             text-color="#fff"
             :default-active="menuActive"
             active-text-color="#ffd04b">
        <el-submenu v-for="(item, index) of menuList"
                    :key="index"
                    :index="item.index"
                    :code="item.code">
            <template slot="title">{{item.title}}</template>
            <el-menu-item v-for="(cItem, cIndex) of item.children"
                          :key="cIndex"
                          :index="cItem.index"
                          :code="item.code">
                <router-link @click.native="getSiderbarParams(cItem.router)"
                             :to="cItem.router">{{cItem.title}}</router-link>
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import * as common from '@/api/common'
import axios from 'axios'
export default {
    watch: {
        $route() {
            // this.getSiderbarParams(this.$router.history.current.path)
        }
    },
    data() {
        return {
            menuList: [],
            menuActive: ''
        }
    },
    computed: {
        ...mapState('global', ['userCode'])
    },
    methods: {
        ...mapMutations('global', [
            'changeSysCode',
            'changeMenuCode',
            'changeSysAndFirst',
            'changeSidebarList',
            'changeBreadcrumbList'
        ]),
        async getMenuData() {
            console.log(this.userCode);
            const res = await common.getMenuListData({userCode: this.userCode})
            this.menuList = res.data
            const path = this.$router.history.current.path
            const pathArr = path.slice(1).split('/')
            const router = "/" + pathArr[0] + '/' + pathArr[1]
            for (const item of this.menuList) {
                if (router === item.router) {
                    this.menuActive = item.index
                } else {
                    for (const cItem of item.children) {
                        if (router === cItem.router) {
                            this.menuActive = cItem.index
                        }
                    }
                }
            }
        },
        getSiderbarParams(path) {
            const pathArr = path.slice(1).split('/')
            if (pathArr.length === 2) {
                this.changeSysCode(pathArr[0])
                this.changeMenuCode(pathArr[1])
                this.getSiderbarData(pathArr[0], pathArr[1])
                this.changeBreadcrumbList('')
            }
        },
        getSiderbarData(systemCode, menuCode) {
            axios
                .get(
                    `/api/menu/getSidebar?sysCode=${systemCode}&menuCode=${menuCode}`
                )
                .then(res => {
                    this.changeSidebarList(res.data)
                })
        }
    },
    created() {
        this.getMenuData()
    }
}
</script>
<style lang="scss" scoped>
.el-submenu__title i {
    color: red !important;
}
</style>
