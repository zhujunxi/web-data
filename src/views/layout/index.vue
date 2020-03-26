<template>
    <div class="app-wrapper">
        <div class="layout-sider">
            <SideBar />
        </div>
        <div class="layout-right">
            <NavBar />
            <AppMain />
        </div>
    </div>
</template>

<script>
import AppMain from './components/AppMain'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
export default {
    name: 'Layout',
    components: {
        AppMain,
        SideBar,
        NavBar
    },
    data() {
        return {}
    }
}
</script>

<style lang="less" scoped>
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
}
.layout-sider {
    position: fixed;
    top: 0;
    left: 0;
    width: 180px;
    height: 100%;
    background: #1c2b36;
    z-index: 100;
}
.layout-right {
    height: 100%;
    padding-left: 180px;
    padding-top: 60px;
}
</style>
