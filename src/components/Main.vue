<template>
    <el-container>
        <el-header>
            <Header />
        </el-header>
        <el-container>
            <p v-if="welcomeShow"
               class="wel">Welcome to xTime</p>
            <el-container v-else>
                <el-aside width="200px"
                          class="sidebar">
                    <Sidebar />
                </el-aside>
                <el-main>
                    <Breadcrumb />
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
import Header from './Header.vue'
import Sidebar from './Sidebar'
import Breadcrumb from './Breadcrumb'
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'Main',
    components: {
        Header,
        Sidebar,
        Breadcrumb
    },
    computed: {
        welcomeShow() {
            return this.$route.path === '/' ? true : false
        },
        ...mapState('global', [
            'system',
            'firstLevelMenu',
            'secondLevelMenu',
            'thirdLevelMenu'
        ])
    },
    methods: {
        ...mapMutations('global', ['changeSysAndFirst']),
        changeMenu(system, first) {
            //调后端接口拿到code对应的name

            this.changeSysAndFirst({
                system: '核心系统',
                first: '会员管理',
                systemCode: system,
                firstMenuCode: first
            })
        }
    },
    mounted() {
        console.log('mounted====' + this.$route.path)
        //将路径转为systemCode 和 firstMenuCode
        this.changeMenu('cmc', 'member')
    }
}
</script>
<style lang="scss" scoped>
.el-header {
    padding: 0;
}
.sidebar {
    background-color: rgb(84, 92, 100);
    margin-bottom: -10000px;
    padding-bottom: 10000px;
}
.wel {
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    width: 100%;
    margin-top: 100px;
}
</style>

