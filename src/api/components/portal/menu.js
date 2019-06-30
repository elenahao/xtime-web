import api from "@/api"

export const dialogSubmit = (data) => {
    return api.request({
        url: `/api/menu/createOrUpdate`,
        method: 'put',
        params: data
    })
}

export const deleteSubmit = (data) => {
    return api.request({
        url: `/api/menu/deleteById`,
        method: 'delete',
        params: data
    })
}

export const getMenuDataSubmit = (data) => {
    return api.request({
        url: `/api/menu/getMenuTree`,
        method: 'get',
        params: data
    })
}