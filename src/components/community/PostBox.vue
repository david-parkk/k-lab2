<template>
    
    <ul id="v-for-object" class="demo">
      <li v-for="value in postList" :key="value">
        <div id="posts">
          <router-link :to="{
            name: 'PostView',
            params: { id: value.board_id },
            query: {
              title: value.title,
              content: value.content,
              comment: value.comment,
              update_date: value.update_date
            }
          }">
                <div class="p">{{ value.board_id }}</div>
                <div class="p">{{ value.title }}</div>
                <div class="p">{{ value.content }}</div>
                <div class="p">{{ value.comment }}</div>
                <div class="p">{{ value.update_date}}</div>
            </router-link>

          <hr>
        </div>
      </li>
    </ul>
    
</template>
  
<script>
import {view_catogary }from "../../api/viewapi"
//import postId from "../views/Postview"

  export default {
    name: 'PostBox',
    data() {
      return {
        parentMessage: 'Parent',
        postList: []
      };
    },
    async mounted(){
        try {
            const res = await view_catogary();
            this.postList=res;
            console.log("mounted", this.postList);
        } catch (error) {
            console.log(error);
        }
       

    },

    methods:{
        
    }
  };
  </script>
  
  <style>
  #post {
    height: 200px;
  }
  
  #post_info p,img{
    display: inline-block;
  }

.p{
  text-align: left;
  background-color: aquamarine;
}
li{
  list-style: none;
}
</style>
