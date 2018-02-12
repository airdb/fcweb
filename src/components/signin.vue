<template>
  <div class="signin">
    <h1>登录</h1>
    <h1>{{ msg }}</h1>
  </div>

</template>

<script>
export default {
  name: 'signin',
  data () {
    return {
      ruleForm: {
        username: 'admin',
        password: 'admin'
      },
      msg: 'Welcome to signin, https://aws.airdb.io/lambda/Passport'
    }
  }
}
</script>
