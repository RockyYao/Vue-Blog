<template lang="html">
  <p class="line">
    <span class="title" v-if="title">{{title}}</span>
  </p>
</template>

<script>
    export default {
        name: "line",
        props:{
          title:{
            type:String,
          }
      }
    }
</script>

<style lang="less" scoped>
  .line {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  > span.title {
    font-weight: bold;
    font-size: 12px;
    padding: 0 10px;
    color: #A7ADBA;
    background-color: white;
  }
  &::after {
     content: "";
     position: absolute;
     top: 50%;
     left: 0;
     z-index: -1;
     width: 100%;
     height: 1px;
     background-color: #A7ADBA;
   }
  }
</style>
