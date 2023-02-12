import axios from 'axios';
import { Message } from 'element-ui';
import router from '../router';

//请求拦截器
axios.interceptors.request.use(config => {
    //如果存在token,请求携带token
    if (window.sessionStorage.getItem('token')) {
        config.headers['token'] = window.sessionStorage.getItem('token');
    }
    return config;
}, error => {
    console.log(error);
})


//响应拦截器
axios.interceptors.response.use(success => {

    if (success.status && success.status == 200) {

        if (success.data.code == 200) {
            Message.success({ message: success.data.data.message });
        } else {
            Message.error({ message: success.data.data });
            return; //使页面停留在当前操作页面,不允许跳转
        }

    }
    return success.data.data;
}, error => {
    if (error.response.code == 504 || error.response.code == 404) {
        Message.error({ message: '服务器被吃了( ╯□╰ )' });
    } else if (error.response.code == 403) {
        Message.error({ message: '权限不足,请联系管理员！' });
    } else if (error.response.code == 404) {
        Message.error({ message: '尚未登录,请登录！' });
        router.replace('/');
    } else if (error.response.code == 401) {
        Message.error({ message: '登录会话已过期,请重新登录' });
        localStorage.removeItem('token');
        this.$router.replace('/login');
    } else {
        if (error.response.data.message) {
            Message.error({ message: error.response.data.message });
        } else {
            Message.error({ message: '未知错误!' });
        }
    }
    return;
});

// let base = '';

//传送json的post请求
export const postRequest = (url, params) => {
    return axios({
        method: 'POST',
        url: `${url}`,
        data: params
    })
}

//传送json的post请求
export const putRequest = (url, params) => {
    return axios({
        method: 'put',
        url: `${url}`,
        data: params
    })
}

//传送json的get请求
export const getRequest = (url, params) => {
    return axios({
        method: 'get',
        url: `${url}`,
        data: params
    })
}

//传送json的delete请求
export const deleteRequest = (url, params) => {
    return axios({
        method: 'delete',
        url: `${url}`,
        data: params
    })
}