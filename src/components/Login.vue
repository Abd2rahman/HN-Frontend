<template>
  <div>
    <a class="btn btn-block btn-social btn-facebook" @click="fbLogin" >
      <span class="fa fa-facebook"></span> Sign in with Facebook
    </a>
  </div>
</template>

<script>
import service from './../service/index.js'

export default {
  name: 'Login',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    fbLogin () {
      service
        .fbLogin()
        .then((res) => {
          this.$router.push('/')
        }).catch(err => console.log(err))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">

</style>
