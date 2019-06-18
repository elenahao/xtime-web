import api from "@/api"
export const getMenuListData = (data) => {
    return api.request({
        url: `/api/menu/getHeaderNav`,
        method: 'get',
        params: data
    })
}