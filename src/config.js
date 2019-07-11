import env from "../build/env"
function commonBaseUrl() {
    env === "development" ?
        "http: //127.0.0.1:8088":
        "http: //127.0.0.1:8088"
}
export const commonBase = commonBaseUrl()