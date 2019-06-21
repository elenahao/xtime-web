import env from "../build/env"
function commonBaseUrl() {
    env === "development" ?
        "http: //127.0.0.1:8083":
        "http: //127.0.0.1:8083"
}
export const commonBase = commonBaseUrl()