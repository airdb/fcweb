<template>
    <div class="noahv-layout">
        <div class="noahv-layout-header">
            dasdsadadasd
            <!-- you can diy header in this content -->
        </div>
        <!-- pleas keep this node -->
        <div class="noahv-layout-content">
            <div class="noahv-layout-content-main">
                <router-view></router-view>
            </div>
        </div>
        <div class="noahv-layout-footer">
            dddsa
            <!-- you can diy footer in this content -->
        </div>
    </div>
</template>

<script>
import NvFooter from "./footer.vue";
import headerConfig from "../header";
import Header from "./header.vue";
import Tree from "../../demo/tree";

export default {
    name: 'NvHeader',
    created() {
        this.headerConf = headerConfig;
    },
    components: {
        NvFooter,
        Header,
        Tree,
    },
    data() {
        return {
            headerConf: null,
        };
    },
};
</script>
