import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type ResponseType = AxiosResponse<any, any>

let interval: number | undefined = undefined
let queue: (() => Promise<void>)[] = []

function startTimer() {
    if (!interval) {
        interval = setInterval(dispatchRequest, 1100)
    }
}

function clearTimer() {
    if (!queue.length) {
        clearInterval(interval)
        interval = undefined
    }
}

function dispatchRequest() {
    let requestGenerator = queue.pop()
    if (requestGenerator) {
        requestGenerator()
    }
    clearTimer()
}

export function queueRequest(url: string, config?: AxiosRequestConfig<any> | undefined): Promise<ResponseType> {
    return new Promise<ResponseType>((resolve, reject) => {
        queue.push(() => axios.get(url, config).then(res => resolve(res)).catch(err => reject(err)))
        startTimer()
    })
}
