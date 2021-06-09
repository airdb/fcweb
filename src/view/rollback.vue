<template>
    
</template>
<script>
import { getToken, setToken } from '../common/token'
export default {
    
    name: 'rollback',
    methods: {
    },
     // 没渲染时加载
    created() {
        let token = this.$route.query.token;
        if (!token) {
            this.$Notice.warning({
                title: 'token不存在',
                desc: '请重新授权登陆'
            });
        }
        setToken(token)
        this.$router.push({path: 'demo/tree'});
    }
};
</script>
