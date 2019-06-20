import axios from 'axios'
import Cookie from 'js-cookie'
import router from '@/router.js'
import {
    Loading,
    Message
} from 'element-ui'
// import qs from 'qs'
import {
    commonBase
} from '../config.js'

axios.defaults.baseURL = commonBase
axios.defaults.timeout = 10000;
// http请求拦截器
let loadinginstace
axios.interceptors.request.use(config => {
    // element ui Loading方法
    loadinginstace = Loading.service({
        fullscreen: true
    })
    return config
}, error => {
    loadinginstace.close()
    Message.error({
        message: '请求超时'
    })
    return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
    loadinginstace.close()
    return data
}, error => {
    loadinginstace.close()
    Message.error({
        message: '加载失败'
    })
    return Promise.reject(error)
})
// 检查http返回码
const checkHttpResponse = (response) => {
    if (response && (response.status === 200 || response.status === 304)) {
        return response
    } else if (parseInt(response.status) === 401) {
        router.replace({
            path: '/login'
        })
    } else {
        return response
    }
}
export default {
    // get(url, params) {
    //     // host = host || commonBase
    //     return axios({
    //         method: 'get',
    //         url: url,
    //         params: params,
    //         timeout: 60000,
    //         headers: {
    //             // 'X-Auth-Token': Cookie.get('access_token'),
    //             'X-Requested-With': 'XMLHttpRequest'
    //         }
    //     })
    // },
    request(config) {
        return axios(
            Object.assign(config, {
                headers: {
                    'X-Auth-Token': Cookie.get('access_token') ? Cookie.get('access_token') : ""
                }
            })
        ).then(checkHttpResponse)
    }
}