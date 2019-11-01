<template>
    <div class="tool-banner">
        <div class="banner-back" v-if="init" :style="{backgroundImage: 'url(' + bannerRes.imgUrl + ')' }"></div>
        <img class="banner-img" v-if="init" :src="bannerRes.imgUrl" @click="dialogTableVisible = true">
        <div class="banner-slogan">{{bannerRes.content}}</div>
        
        <el-dialog  :visible.sync="dialogTableVisible">
            <img :src="bannerRes.imgUrl" @click="dialogTableVisible = true" style="width:100%;height:100%;">
        </el-dialog>
        <div class="banner-change">
            <el-tooltip v-if="loading" class="item" effect="dark" content="随机切换" placement="bottom">
                <div class="flash-btn" @click="handleChangeBanner()"></div>
            </el-tooltip>
            <i class="el-icon-loading" v-if="!loading" style="font-size:18px;color:rgba(255,255,255,.6);"></i>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Loading } from 'element-ui';

export default {
    name: '',
    data() {
        return {
            init: false,
            loading: false,
            bannerRes: {},
            dialogTableVisible: false
        }
    },
    mounted() {
        this.loadingInstance = Loading.service({
            target: ".tool-banner",
            spinner: "el-icon-loading",
            background: "#f3f7fe"
        })
        this.handleChangeBanner()
    },
    methods: {
        ...mapActions(['getOneRandom']),
        handleChangeBanner() {
            this.loading = false
            this.getOneRandom().then(res => {
                this.init = true
                setTimeout(() => {
                    this.bannerRes = res
                    this.loadingInstance.close();
                    this.loading = true
                }, 0)
            }).catch(err => {
                this.loadingInstance.close();
                this.loading = true
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
    width: 1200px;
    box-sizing: border-box;
    color: #fff;
    opacity: .8;
    line-height: 24px;
    text-align: center;
    padding: 22px 60px;
    text-shadow: 1px 1px 2px rgba(0,0,0,.3)
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
.banner-change{
    width: 20px;
    height: 20px;
    position: absolute;
    right: 50px;
    top: 50px;
}
.flash-btn{
    width: 20px;
    height: 20px;
    position: relative;
    cursor: pointer;
}
.flash-btn::before{
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, .2);
    box-shadow: 0 0 3px rgba(0, 0, 0, .1);
    border-radius: 50px;
    animation: before 2s infinite ease-in-out alternate;
}
.flash-btn::after{
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, .2);
    box-shadow: 0 0 3px rgba(0, 0, 0, .1);
    border-radius: 50px;
    animation: after 2s infinite ease-in-out alternate;
}

@keyframes before {
    0%   {
        transform: scale(.3)
    }
    100% {
        transform: scale(1)
    }
}
@keyframes after {
    0%   {
        transform: scale(1)
    }
    100% {
        transform: scale(.3)
    }
}
</style>