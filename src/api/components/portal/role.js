import api from "@/api"

export const dialogSubmit = (data) => {
    return api.request({
        url: `/api/role/createOrUpdate`,
        method: 'put',
        params: data
    })
}

export const deleteSubmit = (data) => {
    return api.request({
        url: `/api/role/deleteById`,
        method: 'delete',
        params: data
    })
}

export const listSubmit = (data) => {
    return api.request({
        url: `/api/role/list`,
        method: 'post',
        params: data
    })
}

export const findRoleTransferSubmit = (data) => {
    return api.request({
        url: `/api/role/findRoleByUserCode`,
        method: 'post',
        params: data
    })
}

export const saveUserRole = (data) => {
    return api.request({
        url: `/api/role/saveUserRole`,
        method: 'get',
        params: data
    })
}

