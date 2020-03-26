<template>
    <div class="demo-page" :style="styles">
        <div class="list" :style="'height:' + (clientHeight - 40) + 'px'">
            <ListTransition :transitionDuration="config.duration">
                <div
                    class="list-item"
                    v-for="(item, index) of listData"
                    :key="index"
                    :data-delay="(index % pageSize) * 60"
                    :data-x="config.x + '%'"
                    :data-y="config.y + '%'"
                    :data-s="config.s"
                    :data-opacity="config.o"
                >
                    <div class="list-item-hd"></div>
                    <div class="list-item-bd">
                        <div class="title"></div>
                        <div class="sub-title"></div>
                    </div>
                    <div class="list-item-ft"></div>
                </div>
            </ListTransition>
            <el-button @click="loadMore" size="small" round>加载更多</el-button>
        </div>
        <div class="form">
            <h2>配置项： <el-button @click="reset()" size="small" round>重置</el-button></h2>
            <el-form ref="form" label-width="120px">
                <el-form-item label="动画持续时间：">
                    <el-slider v-model="config.duration" @change="trigger" :min="0" :max="5" :step="0.1" show-input>
                    </el-slider>
                </el-form-item>
                <el-form-item label="X轴运动：">
                    <el-slider v-model="config.x" @change="trigger" :min="0" :max="100" :step="1" show-input>
                    </el-slider>
                </el-form-item>
                <el-form-item label="Y轴运动：">
                    <el-slider v-model="config.y" @change="trigger" :min="0" :max="100" :step="1" show-input>
                    </el-slider>
                </el-form-item>
                <el-form-item label="透明度：">
                    <el-slider v-model="config.o" @change="trigger" :min="0" :max="1" :step="0.1" show-input>
                    </el-slider>
                </el-form-item>
                <!-- <el-form-item>
                    <el-button type="primary">立即创建</el-button>
                    <el-button @click="reset()">重置</el-button>
                </el-form-item> -->
            </el-form>
        </div>
    </div>
</template>

<script>
import { on, off } from '@/utils/utils'
import ListTransition from './transition/list-transition'

export default {
    components: {
        ListTransition
    },
    computed: {
        styles() {
            return `height:${this.clientHeight}px`
        }
    },
    data() {
        return {
            config: {
                duration: 0.3,
                x: 0,
                y: 100,
                o: 0
            },
            value: 0,
            clientHeight: 0,
            listData: [],
            pageSize: 5
        }
    },
    mounted() {
        this.setPageHeight()
        on(window, 'resize', this.setPageHeight)
        this.getListData()
    },
    methods: {
        getListData() {
            this.listData = 5
        },
        loadMore() {
            this.listData = this.listData + 5
        },
        trigger() {
            this.listData = []
            setTimeout(() => {
                this.listData = 5
            }, 200)
        },
        reset() {
            this.trigger()
        },
        setPageHeight() {
            this.clientHeight = document.documentElement.clientHeight - 100
        }
    }
}
</script>

<style lang="less" scoped>
.demo-page {
    margin: 20px;
    padding: 20px;
    box-sizing: border-box;
    background: #fff;
    position: relative;
}
.list {
    width: 380px;
    height: 100%;
    background: #99a9bf;
    height: 500px;
    padding: 10px;
    box-sizing: border-box;
    position: absolute;
    top: 20px;
    left: 20px;
    border-radius: 9px;
    overflow-x: hidden;
    overflow-y: auto;
    text-align: center;
}
.list-item {
    width: 100%;
    height: auto;
    background: #f9fafc;
    margin-bottom: 10px;
    padding: 12px;
    box-sizing: border-box;
    display: flex;
    border-radius: 6px;
    display: flex;
    align-items: center;
    &-hd {
        width: 44px;
        height: 44px;
        background: #d4e9f5;
        border-radius: 4px;
        flex-shrink: 0;
    }
    &-bd {
        width: 100%;
        height: 44px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 20px;
        .title {
            width: 40%;
            height: 16px;
            background: #bcdcef;
            border-radius: 4px;
        }
        .sub-title {
            width: 70%;
            height: 12px;
            background: #dcedf7;
            border-radius: 4px;
        }
    }
    &-ft {
    }
}

.form {
    height: 100%;
    margin-left: 400px;
    max-width: 500px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
}
</style>
