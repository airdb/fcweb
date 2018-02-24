<template>
  <div class="Home">
    <h1>{{ msg }}</h1>
    <a href="#/signin"> {{web}} </a>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      web: 'http://docs.airdb.com',
      msg: 'Welcome to Your home, passport: https://aws.airdb.io/lambda/Passport'
    }
  }
}
</script>
