<template>
  <div>
    <h2>글쓰기</h2>
    <div><input  type="text" v-model="title"></div>
    <textarea v-model="content" ></textarea>
    <button @click="post_page">게시</button>
    <div>{{ title }}</div>
    <div>{{ content }}</div>
    <div>{{ userid }}</div>
  </div>
</template>


<script>
import {post_content }from "../../api/viewapi"

import Store from '../../api/store.js';

  export default {
    data(){
      return{
        title: "",
        content:"",
        
        userid:"1"
      }
    },
    name: 'BoardPage',
    async mounted(){
      try{
        Store.commit('checktoken')
        this.userid=Store.getters.get_nickname;
        
      } catch (error) {
            console.log(error);
        }
    },
    methods:{
      post_page(){
        const post_data={
          title: this.title,
          content: this.content,
          views:0,
          comment:0,
          userid: this.userid
        }
        post_content(post_data);
        location.replace('../community');
      }
    }
  }
</script>