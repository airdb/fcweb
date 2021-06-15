
export const getTree = function (_this) {
    return _this.$request({
        url: '/airdb/v1/noah/tree',
        method: 'get'
    });
};

