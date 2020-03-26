<template>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
            <keep-alive>
                <router-view :key="key" />
            </keep-alive>
        </transition>
    </section>
</template>

<script>
export default {
    name: '',
    computed: {
        key() {
            return this.$route.path
        }
    }
}
</script>

<style lang="less" scoped>
.app-main {
    /* 60= navbar  60  */
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    background: #f3f7fe;
    box-sizing: border-box;
}
</style>
