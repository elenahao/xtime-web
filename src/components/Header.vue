<template>
    <div class="header">
        <router-link class="header-icon"
                     to="/">
        </router-link>
        <div class="header-nav">
            <Menu />
        </div>
    </div>
</template>
<script>
import Menu from "./Menu"
export default {
    name: 'Header',
    components: {
        Menu
    }
}
</script>
<style lang="scss" scoped>
.header {
    height: 60px;
    padding: 0 30px;
    background-color: #545c64;
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

