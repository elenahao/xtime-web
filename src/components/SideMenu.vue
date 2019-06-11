<template>
    <div class="nav">
        <el-menu default-active="2-1"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>菜单1</span>
                </template>
                <el-menu-item index="1-1"><router-link to="/system/menu1">菜单1-1</router-link></el-menu-item>
                <el-menu-item index="1-2"><router-link to="/system/menu2">菜单1-2</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>菜单2</span>
                </template>
                <el-menu-item index="2-1">菜单2-1</el-menu-item>
                <el-menu-item index="2-2">菜单2-2</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>菜单3</span>
                </template>
                <el-menu-item index="3-1">菜单3-1</el-menu-item>
                <el-menu-item index="3-2">菜单3-2</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: 'Nav',
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        }
    }
}
</script>
<style lang="scss" scoped>
.nav {
    background-color: red;
}
</style>
