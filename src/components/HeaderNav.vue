<template>
    <el-menu class="el-menu-demo"
             mode="horizontal"
             background-color="#40556A"
             text-color="#fff"
             active-text-color="#ffd04b"
             @select="handleSelect">
        <!-- <el-menu-item index="1"><router-link to="/system1">系统一</router-link></el-menu-item> -->
        <!-- <el-submenu index="1">
            <template slot="title">系统管理</template>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">会员管理</template>
        </el-submenu> -->
        <el-menu-item index="1">
            <template slot="title"><router-link to="/system">系统管理</router-link></template>
        </el-menu-item>
        <el-menu-item index="2">
            <template slot="title"><router-link to="/user">会员管理</router-link></template>
        </el-menu-item>
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
