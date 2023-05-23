<template>
    
    <ul id="v-for-object" class="demo">
      <li v-for="value in postList" :key="value">
        <div id="posts">
            <router-link to="/community/post">
                <div>{{ value.title }}</div>
                <div>{{ value.content }}</div>
                <div>{{ value.comment }}</div>
                <div>{{ value.update_date}}</div>
            </router-link>
          <hr>
        </div>
      </li>
    </ul>
    
</template>
  
<script>
import {view_catogary }from "../../api/viewapi"

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
  </style>