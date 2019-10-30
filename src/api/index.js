import axios from "@/utils/request"

// 随机获取一条ONE
export const getOneRandom = params => {
    return axios.request({
        url: 'admin/index/getAgencyList',
        params,
        method: 'get'
    })
}