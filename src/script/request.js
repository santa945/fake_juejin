import axios from 'axios'

const Axios = axios.create({
    timeout: 300000
})

//请求拦截器
Axios.interceptors.request.use(function(config){
    config.headers = {
        ...config.headers,
        'creater-id':'santa'
    }
    return config
},function(error){
    return Promise.reject(error)
});

//响应拦截
function repResolve(rep={}){
    return new Promise((resolve,reject)=>{
        const {data} = rep;
        if(data.status === 200){
            resolve(data.data)
        }else{
            reject()
        }
    })
}

function repReject(error){
    return Promise.reject(error)
}

Axios.interceptors.response.use(repResolve,repReject)
export default Axios