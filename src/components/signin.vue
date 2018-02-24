<template>
  <div class="signin">
    <h1>登录</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ status }}</h1>
    <ul>
    <li><input type="text" v-model="username" ></li>
    <li><input type="password"  v-model="password"></li>
    <button v-on:click="greet">login</button>

    </ul>
  </div>

</template>

<script>
export default {
  name: 'signin',
  data () {
    this.apiurl = 'https://aws.airdb.io/lambda/Passport'
    return {
      username: 'dean',
      password: 'dean',
      status: -1,
      token: 'defualt',
      msg: 'Welcome to signin, https://aws.airdb.io/lambda/Passport'
    }
  },

  methods: {
    greet: function (event) {
      this.$http.get(this.apiurl).then((response) => {
        // 响应成功回调
        console.log(response.data)
        console.log(response.data.status)
        this.status = response.data.status
        // this.username = response.status
        // this.password = response.token
        // this.message = response.body.message
      }, (response) => {
        // 响应错误回调
        console.log('fail!!!!')
        // this.result = 'fetch fail!!'
      })
      // alert(this.username, this)
    }}
}
</script>
