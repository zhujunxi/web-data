import { getOneRandom, getOneRandomTencentCloud } from '@/api/index'

export default {
    state: {},
    mutations: {},
    actions: {
        // 获取广告主素材列表
        getOneRandom({ state, getters }, params) {
            return new Promise((resolve, reject) => {
                getOneRandom(params)
                    .then(res => {
                        const data = res.data
                        resolve(data)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        // 获取广告主素材列表(from:腾讯云函数)
        getOneRandomTencentCloud({ state, getters }, params) {
            return new Promise((resolve, reject) => {
                getOneRandomTencentCloud(params)
                    .then(res => {
                        const data = res.data
                        resolve(data)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        }
    }
}
