import Axios from './../script/request'
import { JUEJIN } from './../config'

//热门推荐
export default {
    getHot: (params = {}) => {
        return Axios.get(`${JUEJIN}/hot`, { params })
    },
    getList: (params = {}) => {
        return Axios.get(`${JUEJIN}/list`, { params })
    }

}