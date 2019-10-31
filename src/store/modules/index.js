import {
    getOneRandom
} from '@/api/index'

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
    }
  };
  