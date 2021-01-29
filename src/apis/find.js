import Axios from './../script/request'
import { JUEJIN } from './../config'

//热门推荐
export default {
    addGood: (data = {}) => {
        return Axios.post(`${JUEJIN}/goods/add`, data)
    },

}