<template>
  <div class="home-page">
    <cl-line title="CODING"></cl-line>
    <ul class="posts-list">
      <li v-for="post in articl">
        <router-link v-if="post.status==='coding'" class="title" :to="{path:'/articl/'+post.id}">{{post.title}}</router-link>
        <span class="createTime" v-if="post.status==='coding'">{{post.creatdate|moment}}</span>
      </li>
    </ul>


    <cl-line title="SHARING"></cl-line>
    <ul class="posts-list">
      <li v-for="post in articl">
        <router-link v-if="post.status==='sharing'" class="title" :to="{path:'/articl/'+post.id}">{{post.title}}</router-link>
        <span class="createTime" v-if="post.status==='sharing'">{{post.creatdate|moment}}</span>
      </li>
    </ul>


    <!-- 联系我 -->
    <cl-line title="LINKS"></cl-line>
    <ul class="links">
      <li>
        <span style="color: #333333;">Github：</span><a href="https://github.com/Rockyyao" target="_blank">Rocky</a>
      </li>
      <li>
        <span style="color: #E80025;">FaceBook：</span><a href="https://www.facebook.com/profile.php?id=100023098685470" target="_blank">@姚晴佳</a>
      </li>
      <li>
        <span style="color: #0C9DF2;">Twitter：</span><a href="https://twitter.com/Rocky" target="_blank">@Rocky</a>
      </li>
      <li>
        <span>Mail：</span><a href="mailto:770166662@qq.com">770166662@qq.com</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import clLine from '../components/Line'
  import axios from 'axios'
  import moment from 'moment/moment'
    export default {
        name: "main",
      data(){
          return{
            articl:[]

          }
      },
      methods:{
          getArticl(){
            axios.get("/api/getAllArticl").then(
              (result)=>{
                var res=result.data;
                this.articl=res;
              }
            )
          }

      },

      filters:{
        'moment': function (value, formatString) {
        formatString = formatString || 'MMMM YYYY';
        // return moment(value).format(formatString); // value可以是普通日期 20170723
        return moment(value).format(formatString); // 这是时间戳转时间
      }},

      mounted(){

          this.getArticl();
      },
       components: {
        clLine
      }
    }
</script>

<style lang="less" scoped>
  .home-page {
    padding: 0 10px;
  ul.posts-list {
    margin-bottom: 30px;
    padding: 0 10px;
    list-style: none;
  > li {
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  .title {
    color: #555;
    cursor: pointer;
    text-decoration: underline;

  }
  .createTime {
    font-size: 12px;
  }
  }
  }

  ul.links {
    list-style: none;


  li {
  > span {
    font-weight: bold;

  }
  > a {
    color: #555;
    text-decoration: underline;
  }
  }
  }
  }
</style>
