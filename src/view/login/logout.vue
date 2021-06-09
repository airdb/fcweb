<template>
    
</template>
<script>
import {rmToken } from '../../common/token'
export default {
    
    name: 'logout',
    methods: {
    },
     // 没渲染时加载
    created() {
       let rmRes = rmToken();
        this.$router.push({path: 'demo/tree'});
    }
};
</script>
