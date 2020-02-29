import axios from '@/utils/request'

// 随机获取一条ONE
export const getOneRandom = params => {
    return axios.request({
        url: 'https://serverless.vince.xin/axios3',
        params,
        method: 'get'
    })
}

// 随机获取一条ONE(From腾讯云函数服务)
export const getOneRandomTencentCloud = params => {
    return axios.request({
        url: 'https://1253306634.cl.ap-chengdu.tencentserverless.com/ONE-random',
        params,
        method: 'get'
    })
}
