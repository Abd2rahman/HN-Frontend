<template>
  <div>
    <form>
      <div>
        <label>Title </label>
        <input type="text" v-model="topic.title">
      </div><br>
      <div>
        <label>URL </label>
        <input type="text" v-model="topic.url">
      </div><br>
      <div>
        <button @click="create">submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import service from './../service/index.js'

export default {
  name: 'SubmitTopic',
  data () {
    return {
      topic: {
        title: '',
        url: ''
      }
    }
  },
  mounted () {
  },
  methods: {
    create () {
      service
        .create(this.topic)
        .then(topic => this.$router.push('/recent'))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
