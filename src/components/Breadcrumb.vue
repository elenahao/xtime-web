<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
export default {
    data() {
        return {
            breadcrumbList: this.$router.history.current.meta.breadcrumb
        }
    },
    watch: {
        $route() {
            this.breadcrumbList = this.$router.history.current.meta.breadcrumb
        }
    },

}
</script>