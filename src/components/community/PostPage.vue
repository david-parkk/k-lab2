<template>
  <div>
    <h2>글쓰기</h2>
    <div><input  type="text" v-model="title"></div>
    <textarea v-model="content" ></textarea>
    <button @click="post_page">계시</button>
    <div>adsfafd</div>
    <div>{{ title }}</div>
    <div>{{ content }}</div>
    <div>{{ userid }}</div>
  </div>
</template>


<script>
import {page_content }from "../../api/viewapi"
import {view_catogary }from "../../api/check_login"
import Store from '../../api/store.js';
  export default {
    data(){
      return{
        title: "",
        content:"",
        views:0,
        commit:0,
        userid:"1"
      }
    },
    name: 'BoardPage',
    mounted(){
      view_catogary(Store.getters.get_token);
    },
    methods:{
      post_page(){
        const post_data={
          title: this.title,
          content: this.content,
          userid: ""
        };
        
        post_data.userid=Store.getters.get_nickname;
        page_content(post_data);
      }
    }
  }
</script>