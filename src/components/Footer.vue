<template>
  <footer>
    <p>还没想好写什么</p>
  </footer>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style lang="less" scoped>
  @import "../assets/style/varilables.less";
  footer {
    height: @layout-footer-height;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;
  }
</style>
