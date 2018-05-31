<template>
  <div class="box">
    <div class="page-head">
      <div class="head-logo"><a href="/">大师兄</a></div>
      <div class="head-search">10秒钟注册账号，找到你的同学</div>
      <div v-if="accountName" class="head-reg">
        <a href="/">{{accountName}}</a>
      </div>
      <div v-else class="head-reg">
        已有账号，立即&nbsp;<a href="/login">登录</a>
      </div>
    </div>
    <div class="page-content container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import handleMessage from '../config/errHandle.js'
  import {getItem, removeItem} from '../config/mUtils.js'
//  import {account} from '../server'
  export default {
    data () {
      return {
        accountName: getItem('accountName')
      }
    },
    mounted () {
//      this.initMenu();
      this.initRoutes()
    },
    methods: {
      initRoutes () {
        this.$router.push('/index')
      },
//      logout () {
//        account.logout().then(res => {
//          if (res.status === '0') {
//            removeItem('accountId');
//            removeItem('token');
//            removeItem('agencyId');
//
//            this.$router.push('/login')
//          } else {
//            handleMessage.call(this, -1)
//          }
//        }).catch(() => {
//          handleMessage.call(this, -500)
//        })
//      }
    }
  }
</script>

<style lang="less">
</style>
