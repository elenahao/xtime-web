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
                <p>{{getBreadCrumb}}</p>
                <router-view class="view" ref=""></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'
import { mapState, mapGetters } from "vuex"

export default {
    name: 'Home',
    components: {
        Header,
        Nav
    },
    computed: {
        ...mapState('global', ['system', 'firstLevelMenu']),
        ...mapGetters('global', ['getBreadCrumb'])
    },
}
</script>
<style lang="scss" scoped>
.el-header{
    padding: 0;
}
</style>

