import api from "@/api"

export const dialogSubmit = (data) => {
    return api.request({
        url: `/api/user/createOrUpdate`,
        method: 'put',
        params: data
    })
}

export const deleteSubmit = (data) => {
    return api.request({
        url: `/api/user/deleteById`,
        method: 'delete',
        params: data
    })
}

export const listSubmit = (data) => {
    return api.request({
        url: `/api/user/list`,
        method: 'post',
        params: data
    })
}