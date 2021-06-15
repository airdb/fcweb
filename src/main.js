/**
 * NoahV
 * Copyright (c) 2019 Baidu, Inc. All Rights Reserved.
 *
 * @file main entry for project
 * @author darren(darrenywyu@gmail.com)
 *         Joannamo(joannamo123@163.com)
 */

import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';
import noahvRequest from 'noahv-request';
import noahvComponent from 'noahv-component';
import noahv from 'noahv-core';
import routerConfig from './common/router';
import headerConfig from './common/header';
import footerApp from './common/layout/footer';
import store from './store/';
import './common/hook/ajax';
import './common/assets/css/main.less';
import {getToken} from './common/token';

// If wanted diy layout, please import this file
// import layoutApp from './common/layout/layout';
const LOGIN_PAGE_PATH = '/login';
const ROLLBACK_PATH = '/callback';
// keep this
Vue.use(VueRouter);


// import iview & noahvComponent
Vue.use(iView);

// must use noahvRequest
Vue.use(noahvRequest);

Vue.use(noahvComponent);

// use default layout with header config
noahv.layout(headerConfig, footerApp);

// If wanted diy layout, please use this line
// noahv.useLayout(layoutApp);

// keep this
noahv.router(routerConfig);
noahv._router.beforeEach((to, from, next) => {
    const token = getToken();
    // 授权登陆回调地址
    if (!token && to.path === ROLLBACK_PATH) {
        next();
        return;
    }
    // 登陆界面
    if (!token && to.path !== LOGIN_PAGE_PATH) {
        console.log('token 不存在');
        // 未登录且要当前页不是登录页 则需要跳转到 登陆页
        next({path: LOGIN_PAGE_PATH});
        return;
        // next()
    }

    // token 存在 且访问登陆界面则跳转到 首页
    if (token && to.path == LOGIN_PAGE_PATH) {
        console.log('token 存在');
        next({path: 'demo/tree'});
        return;
    }
    // token 存在
    if (token) {
        console.log('token 存在');
    }
    next();
});
// init project
noahv.start('#app', store);
