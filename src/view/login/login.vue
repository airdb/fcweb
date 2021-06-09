<template>
    <Form ref="formInline" :model="formInline" :label-width="80" :rules="ruleInline">
        <FormItem prop="user" label="Input">
            <Input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password" label="Input">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <div class="quick-login">
            <a :href ="tokenUrl">
                <img :src="giteeLogo" alt=""> 
            </a>
        </div>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
    </Form>
</template>

<script>
export default {
    name: 'login',
    data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                },
                tokenUrl: "https://scf.baobeihuijia.com/test/uic/login",
                giteeLogo: require("../../common/assets/img/gitee.svg")
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
};
</script>

<style>


.quick-login a{
    display: inline-block;
}
.quick-login a:first-child{
    margin-left: 9%;
}
.quick-login a>img{
    width: 20px;
}
</style>
