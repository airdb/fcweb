<template>
  <div class="signup">
    <h1>注册</h1>
    <h1>{{ msg }}</h1>
  </div>

</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      ruleForm: {
        username: 'admin',
        password: '1111111'
      },
      msg: 'Welcome to signin'
    }
  }
}
</script>
