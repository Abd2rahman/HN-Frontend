<template>
  <div class="news-view" >
    <topic
      v-for="topic in topTopics"
      :infos="topic"
      :index="topTopics.indexOf(topic) + 1">
    </topic>
    <div class="nav">
      <a @click="getMoreTopics" v-show="limit < sumOfTopics ">more...</a>
    </div>
  </div>
</template>

<script>
import Topic from './Topic'
import service from './../service/index.js'


export default {
  name: 'TopTopics',
  components: {
    Topic
  },
  data () {
    return {
      topTopics: [],
      sumOfTopics: 0,
      limit: 0
    }
  },
  methods: {
    getMoreTopics () {
      this.limit =this.limit + 3
      service
        .getTopTopic(this.limit)
        // eslint-disable-next-line
        .then(({topTopics, sumOfTopics}) => {
          this.topTopics = topTopics
          this.sumOfTopics = sumOfTopics
        })
    }
  },
  mounted () {
    this.getMoreTopics()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.news-view
  padding-left 5px
  padding-right 15px
  &.loading:before
    content "Loading..."
    position absolute
    top 16px
    left 20px
  .nav
    padding 10px 10px 10px 40px
    margin-top 10px
    border-top 2px solid #f60
    a
      margin-right 10px
      &:hover
        text-decoration underline
</style>
