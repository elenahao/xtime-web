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

export const getPermDataSubmit = (data) => {
    return api.request({
        url: `/api/perm/getPermTree`,
        method: 'get',
        params: data
    })
}

export const getPermInfoSubmit = (data) => {
    return api.request({
        url: `/api/perm/getPermInfoSubmit`,
        method: 'get',
        params: data
    })
}

export const getPermDataByUserCodeSubmit = (data) => {
    return api.request({
        url: `/api/perm/getPermTreeByUserCode`,
        method: 'get',
        params: data
    })
}

export const checkPermCodeSubmit = (data) => {
    return api.request({
        url: `/api/perm/checkPermCode`,
        method: 'get',
        params: data
    })
}