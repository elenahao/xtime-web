<template>
    <el-menu class="el-menu-demo"
             mode="horizontal"
             background-color="#40556A"
             text-color="#fff"
             active-text-color="#ffd04b"
             @select="handleSelect">
        <!-- <el-menu-item index="1"><router-link to="/system1">系统一</router-link></el-menu-item> -->
        <el-submenu index="1">
            <template slot="title">系统一</template>
            <el-menu-item index="1-1"><router-link to="/system11">系统一-1</router-link></el-menu-item>
            <el-menu-item index="1-2"><router-link to="/system12">系统一-2</router-link></el-menu-item>
            <el-menu-item index="1-3"><router-link to="/system13">系统一-3</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">系统二</template>
            <el-menu-item index="2-1"><router-link to="/system21">系统二-1</router-link></el-menu-item>
            <el-menu-item index="2-2"><router-link to="/system22">系统二-2</router-link></el-menu-item>
            <el-menu-item index="2-3"><router-link to="/system23">系统二-3</router-link></el-menu-item>
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
