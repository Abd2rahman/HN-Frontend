<template>
  <div class="item">
    <span class="index" v-if="index">{{index}}. <a @click="upvote"><img src="../../static/grayarrow.gif"></a><div href="https://news.ycombinator.com/grayarrow.gif"></div></span>
    <p>
      <a class="title" :href="infos.url" target="_blank">{{ infos.title }}</a>
    </p>
    <p class="subtext">
      <span v-show="infos.score">
        {{infos.score}} points by {{infos.by}}
      </span>
      {{infos.createdAt | fromNow}}
      <span class="comments-link">
        | <a :href="`#/topic/${infos.id}`">{{infos.sumOfComments}} comments</a>
      </span>
    </p>
  </div>
</template>

<script>
import service from './../service/index.js'
import moment from 'moment'

export default {
  name: 'Topic',
  props: {
    infos: Object,
    index: Number
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  filters: {
    fromNow (date) {
      return moment(date).fromNow()
    }
  },
  methods: {
    upvote () {
      const {id} = this.infos
      let score = this.infos.score + 1
      service
        .upvote(id, score)
        .then(topic => this.infos.score++)

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import "../variables.styl"

.item
  padding 2px 0 2px 40px
  position relative
  transition background-color .2s ease
  p
    margin 2px 0
  .title:visited
      color $gray
  .index
    color $gray
    position absolute
    width 30px
    text-align right
    left 0
    top 4px
  .domain, .subtext
    font-size 11px
    color $gray
    a
      color $gray
  .subtext a:hover
    text-decoration underline
</style>
