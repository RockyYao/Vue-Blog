<template>
  <div class="post-page">
    <h1 class="title">{{articl.title}}</h1>
    <p class="createTime">{{articl.creatdate|moment}}</p>
    <p class="count">
      <i class="iconfont icon-view"></i>
      <!-- 阅读 -->
      &nbsp;&nbsp;
      <i class="iconfont icon-like"></i>
      <!-- 喜欢 -->

      &nbsp;&nbsp;
      <i class="iconfont icon-interactive"></i>
      <!-- 评论 -->

    </p>
    <div class="markdown-body">{{articl.content}}</div>

    <!-- <appreciation :postId="$route.params.id" :like_ids="data.like_ids || ''"></appreciation> -->

  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment/moment'
    export default {
      name: "articl",
      data(){
        return{
        id:this.$route.params.id,
          articl:{}
        }
      },

      filters:{
        'moment': function (value, formatString) {
          formatString = formatString || 'DD,MMMM,YYYY';
          // return moment(value).format(formatString); // value可以是普通日期 20170723
          return moment(value).format(formatString); // 这是时间戳转时间
        }},

      methods: {
        getTextById() {
          axios.get("/api/getTextById",{params:{id:this.id}}).then((result)=>{
               let res=result.data;
               this.articl=res;
          })
          }

        },

      mounted(){
        this.getTextById();
      }

    }
</script>

<style lang="less" scoped>
  .post-page {
    padding: 0 20px;
  > .title {
    margin-bottom: 10px;
  }
  > .createTime {
    margin-bottom: 10px;
    color: gray;
  }
  > .count {
    margin-bottom: 30px;
    color: gray;
  }

  .comment-box {
    margin-top: 40px;
  .total {
    position: relative;
  > span {
    position: relative;
    background-color: white;
    padding-right: 8px;
    z-index: 2;
  }
  &::after {
     content: "";
     position: absolute;
     left: 0;
     top: 50%;
     width: 100%;
     border-top: 1px solid #ccc;
   }
  }
  }
  }
</style>
