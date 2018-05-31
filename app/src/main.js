// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
import '../src/lib/js/jQuery.md5'
import {baseUrl} from './config/env.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import 'summernote'
import 'summernote/dist/lang/summernote-zh-CN'
import 'summernote/dist/summernote.css'
import 'font-awesome/css/font-awesome.min.css'
import '!style-loader!css-loader!less-loader!./assets/css/common.less'
import '!style-loader!css-loader!less-loader!./lib/css/global.css'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

Vue.use(ElementUI);
window.$ = jQuery;
window.url = baseUrl;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

// router.beforeEach(({meta, path}, from, next) => {
//   const { auth = true } = meta;
//   const isLogin = Boolean(sessionStorage.getItem('accountId'));
//   // const isLogin = true;
//   if (auth && !isLogin && (path !== '/login')) {
//     return next({ path: '/login' })
//   }
//   if (auth && isLogin && (path === '/')) {
//     return next({ path: '/device' })
//   }
//   next()
// });
