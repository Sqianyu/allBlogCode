import axios from 'axios'

let instance = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 5000
})

//请求拦截
instance.interceptors.request.use(config => {
    return config
},err => {
    console.error('请求失败', err)
})

//响应拦截
instance.interceptors.response.use(res => {
    return res
},err => {
    console.error('响应失败', err)
})

//封装http
async function http(option = {}) {
    let result = null;
    if (option.type == 'get' || option.type == 'delete') {
        await instance[option.type](
            option.path, 
            {
                params: option.params
            }
        ).then(res => {
            result = res
        }).catch(err => {
            result = err
        })
    } else if (option.type == 'post' || option.type == 'put') {
        await instance[option.type](
            option.path, 
            option.params
        ).then(res => {
            result = res
        }).catch(err => {
            result = err
        })
    }

    return result
    
}

export default http