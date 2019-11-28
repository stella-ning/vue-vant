import Vue from 'vue'
import axios from 'axios'
import constant from './constant';
import { Toast } from 'vant';
Vue.use(Toast);

const VERSION_INFO = constant.VERSION_INFO;
//配置正式域名和测试域名
const baseUrl = process.env.NODE_ENV === 'development'? '/':'http://test.520daikuan.com';

//创建 axios 实例
let service = axios.create({
    baseURL:baseUrl,
    timeout:60000,
})

//全局的 axios 默认值 `headers` 是即将被发送的自定义请求头
service.defaults.headers.common = {
    'X-Requested-With':'XMLHtmlRequest'
}

//请求拦截
service.interceptors.request.use((config) => {
    // 请求发送前进行处理
    let token;
    if(token){
        config.headers.common['Authorization'] = token
    }
    return config
},(error) => {
    // 请求错误处理
    return Promise.reject(error)
})

//响应拦截
service.interceptors.response.use((response)=>{
    if(response.status != 200){
        //请求返回的状态!=200的情况
        Vue.prototype.$notify({
            message: response.data.message,
            background: '#ed4014',
            className:'notify-box'
        })
        Vue.prototype.$toast.clear()
        return Promise.reject(response)
    }else{
        return response.data
    }
},(error)=>{
    Vue.prototype.$toast.clear()
    return Promise.reject(error)
})

//封装请求方法
const request = {
    post(url,data={},loading=true,fn){
        data = Object.assign({},VERSION_INFO,data);
        if(loading){
            Toast.loading({
                duration:100000,
                message: '请求中...',
                forbidClick: true,
            })
        }
        return service({
            method: 'post',
            url,
            data:JSON.stringify(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': '*/*',
            }
        }).then((response)=>{
            if(loading){
                Toast.clear();
            }
        }).catch((error)=>{
            if (loading) {
                Toast.clear();
            }
        })
    }
}
export default {
    request
}

