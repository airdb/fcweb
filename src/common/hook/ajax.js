/**
 * @file ajax hook conf
 */
import request from 'noahv-request';
import {getToken} from '../token';
import noahv from 'noahv-core';

const LiveDomain = 'https://scf.baobeihuijia.com/release';
const TestDomain = 'https://scf.baobeihuijia.com/test';
const LOGIN_PAGE_PATH = '/login';
// 请求发出前处理，如果需要改变参数或Header，请在此修改
request.hooks.beforeRequest = config => {
    let token = getToken();
    if (!token) {
        token = '';
    }
    config.headers['Authentication'] = token;
    config.url = TestDomain + config.url;
    console.log('xxx', config.url);
    return config;
};

// // 收到相应后处理，如果需要改变数据，请在此修改
request.hooks.beforeSuccess = res => {
    // 未登录
    if (res.status == 50000) {
        noahv.router.push({path: LOGIN_PAGE_PATH});
    }
    return res;
};
export default request;

