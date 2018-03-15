import Vue from 'vue'
import Router from 'vue-router'
import TopicComments from '@/components/TopicComments'
import TopTopics from '@/components/TopTopics'
import RecentTopics from '@/components/RecentTopics'
import SubmitTopic from '@/components/SubmitTopic'
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
  routes: [
    /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, */
    {
      path: '/',
      name: 'TopTopics',
      component: TopTopics
    },
    {
      path: '/recent',
      name: 'RecentTopics',
      component: RecentTopics
    },
    {
      path: '/topic/:id',
      name: 'TopicComments',
      component: TopicComments
    },
    {
      path: '/submit',
      name: 'SubmitTopic',
      component: SubmitTopic
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
