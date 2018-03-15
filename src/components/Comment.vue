<template>
  <div>
    <li v-show="comment.text">
    <div class="comhead">
      <a class="toggle" @click="open = !open">{{open ? '[-]' : '[+]'}}</a>
      {{comment.by}} {{comment.createdAt | fromNow}}
    </div>
    <p class="comment-content" v-show="open">
      {{comment.text}}
    </p>
  </li>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Comment',
  props: {
    comment: {}
  },
  data () {
    return {
      open: true
    }
  },
  mounted () {
  },
  filters: {
    fromNow (date) {
      return moment(date).fromNow()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import "../variables.styl"

.comhead
  color $gray
  font-size 11px
  margin-bottom 8px
  a
    color $gray
    &:hover
      text-decoration underline
  .toggle
    margin-right 4px

.comment-content
  margin 0 0 16px 24px
  word-wrap break-word
  code
    white-space pre-wrap

.child-comments
  margin 8px 0 8px 22px
</style>
