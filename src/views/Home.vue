<template>
    <div>
        <h1>Hello World</h1>
    </div>
</template>
<script>
export default {
    name: "Home",
    methods: {
        getUrl () {
            return this.$route.path
        }
    },
    mounted() {
        console.log(this.$route.path);
    }
}
</script>
