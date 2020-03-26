import Layout from '@/views/layout'
import { hidden } from 'ansi-colors'

export default [
    {
        path: '/',
        component: Layout,
        redirect: '/',
        children: [
            {
                path: '/',
                component: () => import('@/views/home/index.vue'),
                meta: {
                    title: '首页',
                    icon: 'el-icon-s-home'
                }
            }
        ]
    },
    {
        path: '/tool',
        component: Layout,
        redirect: '/tool',
        children: [
            {
                path: '/tool',
                component: () => import('@/views/tool/index.vue'),
                meta: {
                    title: '工具导航',
                    icon: 'el-icon-s-promotion'
                }
            }
        ]
    },
    {
        path: '/chrome-tool',
        component: () => import('@/views/tool/index.vue'),
        children: [
            {
                path: '/chrome-tool',
                meta: {
                    title: 'chrome-工具导航',
                    hidden: true
                }
            }
        ]
    },
    {
        path: '/demo',
        component: Layout,
        redirect: '/demo',
        children: [
            {
                path: '/demo',
                component: () => import('@/views/demo/index.vue'),
                meta: {
                    title: 'Demo',
                    icon: 'el-icon-s-promotion'
                }
            }
        ]
    },
    {
        path: '/demo-list',
        component: () => import('@/views/demo/index.vue'),
        children: [
            {
                path: '/demo',
                meta: {
                    title: 'Demo',
                    hidden: true
                }
            }
        ]
    }
]
