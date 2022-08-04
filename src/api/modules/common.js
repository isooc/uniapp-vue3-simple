import { postJson } from '../http'

export default {
    /**
     * 获取用户信息
     * @param {*} data
     */
    fetchUserInfo (data) {
        return postJson('/common/getUserInfo', data)
    }
}