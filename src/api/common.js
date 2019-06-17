import api from "@/api"
export const getMenuListData = (url, parmas = {}) => {
    return api.get("/api/menu/getHeaderNav", parmas)
}