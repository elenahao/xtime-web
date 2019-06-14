<template>
    <div class="nav">
        <el-menu default-active="2"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
            <template v-for="(item, index) of sidebarList">
                <!-- 单层 -->
                <el-menu-item v-if="item.children.length === 0"
                              :key="index+1">
                    <template slot="title">
                        <span>
                            <router-link :to="'/'+item.router">{{item.title}}</router-link>
                        </span>
                    </template>
                </el-menu-item>
                <!-- 多层 -->
                <el-submenu v-else
                            v-for="(cItem, cIndex) in item.children"
                            :index="String(index+1)"
                            :key="cIndex">
                    <template slot="title">
                        <i class="el-icon-s-fold"></i>
                        <span>{{item.title}}</span>
                    </template>
                    <el-menu-item :key="cIndex+1"
                                  index="1-1">
                        <router-link :to="'/'+cItem.router">{{cItem.title}}</router-link>
                    </el-menu-item>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import axios from 'axios'
export default {
    name: 'Nav',
    data() {
        return {
            sidebarList: []
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
        getSysAndFirst: function(val) {
            console.log(val)
            //调用接口获取url对应的左侧菜单栏数据
            axios.get('/api/getSidebar?code=' + val).then(res => {
                this.sidebarList = res.data
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.el-menu {
    border-right: 0;
}
</style>
