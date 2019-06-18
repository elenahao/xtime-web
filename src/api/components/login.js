import api from "@/api"
export const doLogin = (data) => {
    return api.request({
        url: `/api/user/login`,
        method: 'get',
        params: data
    })
}