<template>
    
    <ul id="v-for-object" class="demo">
      <li v-for="value in commentList" :key="value">
        <div id="posts">
            <div>{{ value.content }}</div>
            <div>{{ value.user}}</div>
          <hr>
        </div>
      </li>
    </ul>
</template>
  
<script>
import {view_comment }from "../../api/viewapi"

  export default {
    name: 'CommentBox',
    props: ['board_id'],
    data() {
      return {
        parentMessage: 'Parent',
        commentList: []
      };
    },
    async mounted() {
      try {
        const comment_data = {
          id: this.board_id
        };
        console.log(comment_data);
        const res = await view_comment(comment_data);
        this.commentList = res;
        console.log("mounted", this.commentList);
      } catch (error) {
        console.log(error);
      }
    },
  };
  </script>
  
  <style>
  #post {
    height: 200px;
  }
  
  #post_info p,img{
    display: inline-block;
  }
  </style>