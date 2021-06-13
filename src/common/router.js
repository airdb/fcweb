/**
 * @file router config
 */
export default [
    /* eslint-disable no-undef */
    // Keep this line if you want auto add router by noahv create
    {
        component: r => require.ensure([], () => r(require('src/view/login/login')), 'login'),
        path: 'login'
    },
    {
        component: r => require.ensure([], () => r(require('src/view/login/logout')), 'logout'),
        path: 'logout'
    },
    {
        component: r => require.ensure([], () => r(require('src/view/rollback')), 'callback'),
        path: 'callback',
    },
    {
        component: r => require.ensure([], () => r(require('src/demo/tree')), 'demo/tree'),
        path: 'demo/tree'
    },
    {
        component: r => require.ensure([], () => r(require('src/demo/chart/trend')), 'demo/chart/trend'),
        path: '/demo/chart/trend'
    },
    {
        // file path，string or object
        component: r => require.ensure([], () => r(require('src/demo/table/tableDemo')), 'tableDemo'),
        // hash name,unique
        path: '/tableDemo'
    },
    {
        component: r => require.ensure([], () => r(require('src/demo/form/formDemo')), 'formDemo'),
        path: '/formDemo'
    },
    {
        component: r => require.ensure([], () => r(require('src/demo/table/filterTableDemo')), 'filterTableDemo'),
        path: '/filterTableDemo'
    },
    {
        component: r => require.ensure([], () => r(require('src/demo/chart/chartDemo')), 'chartDemo'),
        path: '/chartDemo'
    },
    // please keep this object last one
    {
        component: r => require.ensure([], () => r(require('src/common/layout/404')), '404'),
        path: '*',
    }

    /* eslint-enable */
    // please keep this object last one
];