import axios from 'axios'
import Cookie from 'js-cookie'
// import qs from 'qs'
import {
    commonBase
} from '../config.js'

axios.defaults.baseURL = commonBase
axios.defaults.timeout = 10000;
export default {
    get(url, params) {
        // host = host || commonBase
        return axios({
            method: 'get',
            url: url,
            params: params,
            timeout: 60000,
            headers: {
                // 'X-Auth-Token': Cookie.get('access_token'),
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
    },
    request(config) {
        return axios(
            Object.assign(config, {
                headers: {
                    'X-Auth-Token': Cookie.get('access_token') ? Cookie.get('access_token') : ""
                }
            })
        ).then((response) => {
            return response
        })
    }
}