<template>
    <div class="tool-banner">
        <div class="banner-back" :style="{backgroundImage: 'url(' + bannerRes.imgUrl + ')' }"></div>
        <img class="banner-img" :src="bannerRes.imgUrl" @click="dialogTableVisible = true" alt="" srcset="">
        <div class="banner-slogan">{{bannerRes.content}}</div>
        
        <el-dialog  :visible.sync="dialogTableVisible">
            <img :src="bannerRes.imgUrl" @click="dialogTableVisible = true" style="width:100%;height:100%;">
        </el-dialog>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Loading } from 'element-ui';

export default {
    name: '',
    data() {
        return {
            bannerRes: {},
            dialogTableVisible: false
        }
    },
    created() {
        this.loadingInstance = Loading.service({
                target: ".tool-banner",
                spinner: "el-icon-loading",
                background: "#f3f7fe"
            })
    },
    mounted() {
        this.init()
    },
    methods: {
        ...mapActions(['getOneRandom']),
        init() {
            
            this.getOneRandom().then(res => {
                this.bannerRes = res
                this.loadingInstance.close();
            }).catch(err => {
                this.loadingInstance.close();
            })
        }
	}
}
</script>

<style lang="less" scoped>
.tool-banner {
    width: 100%;
    height: 460px;
    margin: 0 auto;
    padding-bottom: 46px;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
}
.banner-img{
    max-height: 320px;
    height: 50%;
    background: #fff;
    padding: 20px;
    border-style: solid;
    border-width: 10px;
    border-top-color: lighten(#000, 20%);
    border-right-color: lighten(#000, 0%);
    border-bottom-color: lighten(#000, 20%);
    border-left-color: lighten(#000, 0%);
    box-shadow: 2px 2px 4px rgba(0,0,0,.6);
    z-index: 10;
}
.banner-slogan{
    color: #fff;
    opacity: .8;
    line-height: 24px;
    text-align: center;
    padding: 22px 120px;
    text-shadow: 1px 1px 2px rgba(0,0,0,.2)
}
.banner-back{
    background-repeat: no-repeat;
    background-size: cover;
    width: 130%;
    height: 130%;
    position: absolute;
    top: -15%;
    left: -15%;
    z-index: 0;
    filter: blur(12px);
    opacity: .9;
}
</style>