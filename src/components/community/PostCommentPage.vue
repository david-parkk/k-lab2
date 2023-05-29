<template>
    <div>
      <h2>댓글 달기</h2>
      <textarea v-model="comment" ></textarea>
      <button @click="post_comment_page">게시</button>
      <div>{{ this.board }}</div>
      <div>{{ this.userid }}</div>
      <div>{{ this.content }}</div>
    </div>
  </template>
  
  
  <script>
  import {post_comment }from "../../api/viewapi"

  import Store from '../../api/store.js';


  
    export default {
        props: ['board_id'],
        
        data(){
        return{
          comment:"",
          board: this.board_id,
          userid:"1"
        }
      },
      name: 'BoardPage',
      async mounted(){
        try{
          Store.commit('checktoken')
          this.userid=Store.getters.get_nickname;
          this.userid="1";
        } catch (error) {
              console.log(error);
          }
      },
      methods:{
        post_comment_page(){
          const post_data={
            board: this.board,
            user: this.userid,
            content: this.comment
          }
          console.log(post_data);
          post_comment(post_data);
    
        }
      }
    }
  </script>