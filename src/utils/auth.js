import Cookies from 'js-cookie'
const TokenKey = 'lz_token'

const token = 'ea28c9d40e3e4a43bf5746de7ae4b9bd'
export function getToken () {
    // return Cookies.get(TokenKey || token) // || uni.getStorageSync(TokenKey)
    return uni.getStorageSync(TokenKey)
}

export function setToken (token) {
    // Cookies.set(TokenKey, token, { overwrite: true, expires: 7 })
    uni.setStorageSync(TokenKey, token)
}

export function removeToken () {
    // Cookies.remove(TokenKey)
    uni.clearStorageSync(TokenKey)
}

const companyIdKey = 'lz-m-companyId'
export function getCompanyId () {
    return uni.getStorageSync(companyIdKey) // Cookies.get(`${companyIdKey}`) // || uni.getStorageSync(companyIdKey)
}

export function setCompanyId (companyId) {
    uni.setStorageSync(companyIdKey, companyId)
}

/**
 * 当前用户的灰度版本
 * @param {*} version 
 */
const userVersionKey = 'lz-m-version'
export function setUserVersion (version) {
    uni.setStorageSync(userVersionKey, version)
}

export function getUserVersion () {
    return uni.getStorageSync(userVersionKey) || {}
}

/**
 * 当前用户的权限codes
 * @param {*} version 
 */
const resCodesKey = 'lz-m-codes'
export function setResCodes (codes) {
    uni.setStorageSync(resCodesKey, codes)
}

export function getResCodes () {
    return uni.getStorageSync(resCodesKey) || []
}

/**
 * 当前用户的用户信息
 * @param {*} version 
 */
const userInfoKey = 'lz-m-userInfo'
export function setUserInfo (userInfo) {
    uni.setStorageSync(resCodesKey, userInfo)
}

export function getUserInfo () {
    return uni.getStorageSync(resCodesKey) || []
}
