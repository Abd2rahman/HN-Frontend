<template>
  <div class="item-view" >
    <topic :infos="infos" v-if="infos"></topic>
    <div class="add-comment">
      <textarea  cols="40" rows="5" v-model="text"></textarea><br>
      <button @click="addComment" v-show="text" >add comment</button>
    </div>
    <!-- <item :item="item"></item>
    <p class="itemtext" v-if="hasText" v-html="item.text"></p>
    <ul class="poll-options" v-if="pollOptions">
      <li v-for="option in pollOptions">
        <p>{{option.text}}</p>
        <p class="subtext">{{option.score}} points</p>
      </li>
    </ul> -->
    <ul class="comments" v-if="comments">
      <comment v-for="comment in comments" :comment="comment"/>
    </ul>
    <p v-show="!comments.length">No comments yet.</p>
  </div>
</template>

<script>
import service from './../service/index.js'
import Comment from './Comment'
import Topic from './Topic'

export default {
  name: 'TopicComments',
  components: {
    Comment,
    Topic
  },
  data () {
    return {
      text: '',
      comments: [],
      infos: {}
    }
  },
  mounted () {
    service
      .getTopic(this.$route.params.id)
      // eslint-disable-next-line
      .then(({comments, ...infos}) => {
        this.comments = comments
        this.infos = infos
      })
  },
  methods: {
    addComment () {
      service
        .addComment(this.infos.id, this.text)
        .then(comment => {
          this.comments.push(comment)
          this.infos.sumOfComments++
          this.text = ''
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import "../variables.styl"

.item-view
  .add-comment
    padding-left 0
    margin-bottom 30px
  .item
    padding-left 0
    margin-bottom 30px
    .index
      display none
  .poll-options
    margin-left 30px
    margin-bottom 40px
    li
      margin 12px 0
    p
      margin 8px 0
    .subtext
      color $gray
      font-size 11px
  .itemtext
    color $gray
    margin-top 0
    margin-bottom 30px
  .itemtext p
    margin 10px 0
</style>
