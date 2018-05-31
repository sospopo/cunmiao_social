import Vue from 'vue'
import Router from 'vue-router'

const Navigation = r => require.ensure([], () => r(require('../components/Navigation.vue')), 'Navigation');
const Index = r => require.ensure([], () => r(require('../pages/Index.vue')), 'Index');
const AddPost = r => require.ensure([], () => r(require('../pages/AddPost.vue')), 'AddPost');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Navigation,
      children: [
        {
          path: '/index',
          component: Index
        },
        {
          path: '/add-post',
          component: AddPost
        },
      ]
    },
    {
      path: '/login',
      component: Navigation
    }
  ]
})
