import { getHost } from "./env";
import { getToken, getCompanyId } from '@/utils/auth'
let host = getHost()
// const companyId = getCompanyId() // uni.getStorageSync('companyId')
/**
 * 请求头中不需要companyId的url
 */
const urlList = [
    '/openapi/internal/user/get'
]

/**
 * 请求头配置
 */
const getHeader = (url) => {
    let header = { token: getToken() }
    if (!urlList.includes(url) && getCompanyId()) header.companyId = getCompanyId()
    let userVersion = uni.auth.getUserVersion()
    return {
        ...header,
        ...userVersion
    }
}


/**
 * postJson配置
 * 发送请求前需先校验用户的登录信息是否有效
 * @param {*} url 接口api
 * @param {*} params 请求参数
 * @param {*} param2 header  callback
 */
export async function postJson (url, params, header = { 'content-type': 'application/json' }, callback) {

    if (typeof header === 'function') {
        callback = header
        header = { 'content-type': 'application/json' }
    }

    if (check(url)) {
        let config = {
            url: `${host}${url}`,
            data: { ...params },
            header: {
                ...header,
                ...getHeader(url)
            },
            timeout: 6000,
            method: 'POST'
        }

        return request(config, callback)
    }
    return Promise.reject();
}

/**
 * get请求配置
 * 发送请求前需先校验用户的登录信息是否有效
 * @param {*} url 接口api
 * @param {*} params 请求参数
 * @param {*} param2 header  callback
 */
export async function get (url, params, callback) {
    if (check(url)) {
        let config = {
            url: `${host}${url}`,
            data: { ...params },
            header: { ...getHeader(url) },
            timeout: 6000,
            method: 'GET'
        }

        return request(config, callback)
    }
    return Promise.reject();
}

/**
 * 发送请求
 * @param {*} config 请求配置
 * @param {*} callback 请求成功的回调
 */
async function request (config, callback) {
    uni.showLoading({ title: '加载中...' })
    let res = await uni.request({ ...config }).then(resp => resp).catch(e => e)


    uni.hideLoading()
    if (callback) return callback(res)
    else if (res.statusCode === 200) {
        let data = res.data
        // 请求成功
        if (data.code === '1') return Promise.resolve(data.data)
        // 平台的借款返回的数据结构和工程经营系统不一样
        if (data.code === 200) return Promise.resolve(data.result)
        // 无权限
        if (data.code === '-110105') {
            // uni.redirectTo({ url: '/pages/no-auth/index' })
            uni.showToast({ title: data.message, icon: 'none' })
            return Promise.reject('error')
        }
        // 系统繁忙
        else {
            uni.showToast({ title: data.message, icon: 'none' })
            // return Promise.reject('error')
        }
        // 请求失败
        return Promise.reject(data)
    } else uni.showToast({ title: res.data.message, icon: 'none' })
    return Promise.reject('error')
}

/**
 * return true --- 有效
 */
function check (url) {
    if (!getToken()) {
        uni.showToast({ title: 'token is missing', icon: 'none' })
        return false
    }

    if (!urlList.includes(url) && !getCompanyId()) return false
    // let curDate = new Date();
    // let diff = (curDate - userInfo.storageTime) / (1000 * 60 * 60);
    // if (diff > 4.5) {
    //     uni.showToast({ title: '登录信息失效', icon: 'none' })
    //     return false
    // }
    return true
}
