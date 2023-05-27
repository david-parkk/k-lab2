<template>
    {{name}}

    <ul>
        <li v-for="(category, key) in challenge" :key="key" class="challenge" @click="send_router(key)">
          
          <ul>
            <li v-for="(value, key2) in category" :key="value">
              {{key2}} {{ value }}

            </li>
          </ul>
          <hr>
        </li>
        
      </ul>

</template>


<script>
import {view_challenge} from '../api/category.js'
export default {
  data(){
    return{
        challenge:[],
        name:""
    }
  },
  async mounted(){
    const key=this.$route.query.key;
    this.name=key;
    console.log(key);
    try{
      view_challenge().then((array)=>{
          
          console.log(array);
          console.log(array['data'].length);
          for(var i=0;i<array['data'].length;i++){
            var challenge={}
            challenge['challenge_id']=array['data'][i]['challenge_id'];
            challenge['subject']=array['data'][i]['subject'];
            challenge['rate']=array['data'][i]['rate'];
            challenge['views']=array['data'][i]['views'];
            challenge['like_count']=array['like_count'][i]['like_count'];
            this.challenge.push(challenge);
          }
        })
     } catch(error){
      console.log(error);
    }
  },
  methods:{
    send_router(value){
      console.log("key")
      console.log(value);
      console.log(key)
      var key=this.challenge[value]['challenge_id']
      this.$router.push({ path: 'challenge', query: { key }})
    }
  }
};

</script>