import api from "@/api"

export const dialogSubmit = (data) => {
    return api.request({
        url: `/api/perm/createOrUpdate`,
        method: 'put',
        params: data
    })
}

export const deleteSubmit = (data) => {
    return api.request({
        url: `/api/perm/deleteById`,
        method: 'delete',
        params: data
    })
}

export const listSubmit = (data) => {
    return api.request({
        url: `/api/perm/list`,
        method: 'post',
        params: data
    })
}