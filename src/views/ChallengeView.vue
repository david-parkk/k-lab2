<template>
  {{ subject }} 
  <hr> 
  {{ content }}
  <hr>
  {{ address }}

</template>

<script>
import {view_challenge_detail} from '../api/challenge.js'
export default {
  data(){
    return{
        subject:"",
        content:"",
        address:"",
        name:""
    }
  },
  async mounted(){
    const key=this.$route.query.key;
    this.name=key;
    
    try{
        view_challenge_detail(this.name).then((array)=>{
            console.log("return",array)
            this.subject=array['subject'];
            this.content=array['content'];
            this.address=array['address'];
            
        })
    }catch(error){
        console.log(error)
    }
  }
    
}
</script>