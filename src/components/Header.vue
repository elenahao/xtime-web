<template>
    <div class="header">
        <router-link class="header-icon"
                     to="/">
        </router-link>
        <div class="header-nav">
            <HeaderNav />
        </div>
    </div>
</template>
<script>
import HeaderNav from "./HeaderNav"
export default {
    name: 'Header',
    components: {
        HeaderNav
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
    .header-nav{
        margin-left: 100px;
    }
}
</style>

