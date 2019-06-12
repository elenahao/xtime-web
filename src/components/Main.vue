<template>
    <el-container>
        <el-header>
            <Header />
        </el-header>
        <el-container>
            <el-aside width="200px">
                <Nav />
            </el-aside>
            <el-main>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item v-if="system">{{system}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="firstLevelMenu">{{firstLevelMenu}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="secondLevelMenu">{{secondLevelMenu}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="thirdLevelMenu">{{thirdLevelMenu}}</el-breadcrumb-item>
                </el-breadcrumb>
                <router-view class="view" ref=""></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'
import { mapState } from "vuex"

export default {
    name: 'Home',
    components: {
        Header,
        Nav
    },
    computed: {
        ...mapState('global', ['system', 'firstLevelMenu', 'secondLevelMenu', 'thirdLevelMenu'])
    },
}
</script>
<style lang="scss" scoped>
.el-header{
    padding: 0;
}
</style>

