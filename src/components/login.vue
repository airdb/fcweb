<template>
  <div class="login">
    <ul>
    <form accept-charset="UTF-8" >
     <h1>Sign in to airdb</h1>
     <label for="login_field">
       Username or email address
     </label>
    <li><input type="text" v-model="username" ></li>

    <label for="password">
      Password <a href="/password_reset" class="label-link">Forgot password?</a>
    </label>
    <li><input type="password" autocomplete="new-password" v-model="password"></li>
    <button v-on:click="login">login</button>
    </form>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'signin',
  data () {
    this.apiurl = 'https://aws.airdb.io/lambda/test'
    return {
      user: sessionStorage.username,
      username: '',
      password: '',
      status: -1,
      token: 'defualt',
      msg: 'Welcome to signin, https://aws.airdb.io/lambda/test'
    }
  },

  methods: {
    login: function (event) {
      this.$http.get(this.apiurl).then((response) => {
        // 响应成功回调
        console.log(response.data)
        console.log(response.data.status)
        this.status = response.data.status
        this.username = response.body.token
        // this.password = response.token
        // this.message = response.body.message
        this.$session.start()
        console.log('=====', this.$session.id())
        this.$session.set('username', this.password)
        console.log('=====', this.$session.getAll())
        this.username = this.$session.get('username')
        this.stauts = 0
        // alert(this.username, this)
      }, (response) => {
        // 响应错误回调
        console.log('fail!!!!')
        // this.result = 'fetch fail!!'
      })
      this.$router.push({ path: '/' })
      // alert(this.status)
      // if (this.status === 0) {
      //   alert(this.username)
      // }
    }}
}
</script>
