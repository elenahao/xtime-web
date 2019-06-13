<template>
    <el-container>
        <el-header>
            <Header />
        </el-header>
        <el-container>
            <el-aside width="200px" class="sidebar">
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
import { mapState, mapMutations } from "vuex"

export default {
    name: 'Home',
    components: {
        Header,
        Nav
    },
    computed: {
        ...mapState('global', ['system', 'firstLevelMenu', 'secondLevelMenu', 'thirdLevelMenu'])
    },
    methods: {
        ...mapMutations('global', ['changeSysAndFirst']),
        changeMenu (system, first) {
            //调后端接口拿到code对应的name
            this.changeSysAndFirst({system: '核心系统', first: '会员管理', systemCode: system, firstMenuCode: first});
        }
    },
    mounted() {
        console.log("mounted===="+this.$route.path);
        //将路径转为systemCode 和 firstMenuCode
        this.changeMenu('cmc', 'member');
    }
}
</script>
<style lang="scss" scoped>
.el-header{
    padding: 0;
}
.sidebar{
    background-color: rgb(84, 92, 100);
    margin-bottom: -10000px;
    padding-bottom: 10000px;
}
</style>

