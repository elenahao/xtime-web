import env from "../build/env"
function commonBaseUrl() {
    env === "development" ?
        "http: //192.168.111.193:8083":
        "http: //192.168.111.193:8083"
}
export const commonBase = commonBaseUrl()