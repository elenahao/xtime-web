import axios from 'axios'
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
    }
}