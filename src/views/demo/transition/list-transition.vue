<template>
    <transition-group
        v-bind:css="false"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
    >
        <slot />
    </transition-group>
</template>

<script>
/*** *列表过度效果组件* *
 * * @Preview: 站内信-消息列表
 * * @params:
 * * - @transitionDuration : 动画持续时间
 * * - @data-(x,y,s,opcity) : 效果设置
 * * - @data-delay : 延迟设置
 * */
export default {
    props: {
        transitionDuration: {
            type: Number,
            default: 0.3
        }
    },
    methods: {
        beforeEnter(dom) {
            let { x = 0, y = 0, s = 1, opacity = 0 } = dom.dataset

            dom.style.cssText = `
                transition: ${this.transitionDuration}s;
                opacity: ${opacity};
                transform: scale(${s}) translateX(${x}) translateY(${y});
            `
        },
        enter(dom, done) {
            let delay = dom.dataset.delay
            setTimeout(
                function() {
                    dom.style.cssText = `
                        transition: ${this.transitionDuration}s;
                        opacity: 1;
                        transform: scale(1) translateX(0) translateY(0);
                    `
                    //监听 transitionend 事件
                    var transitionend = window.ontransitionend ? 'transitionend' : 'webkitTransitionEnd'
                    dom.addEventListener(transitionend, function onEnd() {
                        dom.removeEventListener(transitionend, onEnd)
                        done() //调用done() 告诉vue动画已完成，以触发 afterEnter 钩子
                    })
                }.bind(this),
                delay
            )
        },
        afterEnter(dom) {
            dom.style.cssText = ''
        }
    }
}
</script>
