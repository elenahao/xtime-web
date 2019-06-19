import api from "@/api"

export const dialogSubmit = (data) => {
    return api.request({
        url: `/api/system/createOrUpdate`,
        method: 'put',
        params: data
    })
}