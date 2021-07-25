import Taro from '@tarojs/taro'

type method = "GET" | "POST" | "DELETE" | "PUT" | "OPTIONS"
const base_url: string = "http://192.168.1.77:3001"
function setRequestHeader(): object {
    let header: object = { "content-type": "application/json; charset=utf-8" };
    let token: string | null = Taro.getStorageSync('token');
    if (token) {
        header["token"] = token
    }
    return header
}
// 请求拦截
function interceptor(chain) {
    const requestParams = chain.requestParams
    console.log(chain);

    // const { method, data, url } = requestParams

    // console.log(`http ${method || 'GET'} --> ${url} data: `, data, 1)

    return chain.proceed(requestParams)
        .then(res => {
            // console.log(`http <-- ${url} result:`, res, 2)
            return res
        })
}
function request(url: string, data: object, method?: method) {
    return new Promise(async (resolve, reject) => {
        let header = await setRequestHeader()
        Taro.addInterceptor(interceptor)
        Taro.request({
            url: base_url + url,
            method: method ?? "POST",
            data: data,
            header: header,
            success: (res) => {
                resolve(res.data)
            },
            fail: (error) => {
                reject(error)
                console.log(error)
            }
        })
    })
}


export default request