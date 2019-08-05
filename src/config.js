import env from "../build/env"
function commonBaseUrl() {
    env === "development" ?
        "http: //192.168.148.98:8088":
        "http: //192.168.148.98:8088"
}
export const commonBase = commonBaseUrl()