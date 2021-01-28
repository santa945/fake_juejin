import Axios from '../script/request'
import { JUEJIN } from './../config'

//查询当前用户信息
export function getUserInfo (params = {}) {
    return Axios.get(`${JUEJIN}/user/${params.id}`, { params })
}