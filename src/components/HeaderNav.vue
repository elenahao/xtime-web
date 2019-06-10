<template>
    <el-menu class="el-menu-demo"
             mode="horizontal"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
             @select="handleSelect">
        <!-- <el-menu-item index="1"><router-link to="/system1">系统一</router-link></el-menu-item> -->
        <el-submenu index="1">
            <template slot="title">总系统管理</template>
            <el-menu-item index="1-1"><router-link to="/user">用户管理</router-link></el-menu-item>
            <el-menu-item index="1-2"><router-link to="/role">角色管理</router-link></el-menu-item>
            <el-menu-item index="1-3"><router-link to="/system">系统管理</router-link></el-menu-item>
        </el-submenu>
         <el-submenu index="2">
            <template slot="title">核心系统</template>
            <el-menu-item index="2-1"><router-link to="/member">会员管理</router-link></el-menu-item>
            <el-menu-item index="2-2"><router-link to="/snack">卖品管理</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">票务系统</template>
            <el-menu-item index="3-1"><router-link to="/movie">影片管理</router-link></el-menu-item>
            <el-menu-item index="3-2"><router-link to="/match">数据匹配</router-link></el-menu-item>
            <el-menu-item index="3-3"><router-link to="/showtime">排期管理</router-link></el-menu-item>
        </el-submenu> 
    </el-menu>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        }
    }
}
</script>
