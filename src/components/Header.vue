<template>
    <div class="header">
        <router-link class="header-icon"
                     to="/">
        </router-link>
        <div @click="addUserId()">click </div>
        <div @click="addAction()">click2 </div>
        <div>{{userId}}</div>
        <div>{{userName}}</div>
        <div class="header-nav">
            <HeaderNav />
        </div>
    </div>
</template>
<script>
import HeaderNav from './HeaderNav'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    name: 'Header',
    components: {
        HeaderNav
    },
    methods: {
        ...mapMutations('user', ['addUserId']),
        ...mapActions('user', ['addAction']),
    },
    computed: {
        ...mapState('user', ['userId', 'userName']),
        ...mapGetters('user', ['moreUserId'])
    }
}
</script>
<style lang="scss" scoped>
.header {
    height: 60px;
    padding: 0 30px;
    background-color: $primary-color;
    display: flex;
    flex-direction: center;
    align-items: center;
    .header-icon {
        display: inline-block;
        background: url('../assets/logo.png') no-repeat center center;
        width: 136px;
        height: 42px;
    }
    .header-nav {
        margin-left: 100px;
    }
}
</style>

