<template>
    <el-menu class="el-menu-demo"
             mode="horizontal"
             background-color="#40556A"
             text-color="#fff"
             active-text-color="#ffd04b"
             @select="handleSelect">
        <el-menu-item index="1"><router-link to="/system">系统管理</router-link></el-menu-item>
    </el-menu>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        }
    },
}
</script>
