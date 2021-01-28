import axios from 'axios'

const Axios = axios.create({
    baseURL: 'http://127.0.0.1:3000/mock/11',
    timeout: 300000 //30s网络超时
})

//请求拦截器
Axios.interceptors.request.use(function (config) {
    config.headers = {
        ...config.headers,
        'creater-id': 'santa'
    }
    return config
}, function (error) {
    return Promise.reject(error)
});

//响应拦截
function repResolve (rep = {}) {
    return new Promise((resolve, reject) => {
        const { data } = rep;
        console.log(data);
        if (data.errcode === 0) {
            resolve(data.data)
        } else {
            reject()
        }
    })
}

function repReject (error) {
    return Promise.reject(error)
}

Axios.interceptors.response.use(repResolve, repReject)
export default Axios