<template>
  <div id="app" class="layout-default">

    <nav-header></nav-header>
    <router-view class="layout-main"></router-view>
    <nav-footer></nav-footer>
    <div class="layout-bg"></div>

  </div>
</template>

<script>
  import NavHeader from './components/Header'
  import NavFooter from './components/Footer'
export default {
  name: 'App',
  components:{
    NavHeader,
    NavFooter
  }

}
</script>

<style lang="less">
  @import "./assets/style/varilables.less";

  html,
  body,
  #__nuxt,
  #__layout,
  .layout-default {
    height: 100%;
    .layout-main {
      min-height: calc(~"100% - " (@layout-header-height + @layout-footer-height));
      max-width: 640px;
      margin: 0 auto;
      padding-bottom: 20px;
    }

    .layout-bg {
      position: fixed;
      left: 0;
      top: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background: url("./assets/images/background-code2.png") no-repeat fixed top;
      background-size: cover;
      opacity: 0.1;
      filter: blur(2px);
    }
  }
</style>
