<template>
  <div class="home">
    
    
    <h2> 댄스첼린지 </h2>
    <div id="dance_challenge">
      <ul>
        <li v-for="(category, key) in dance_category" :key="key" class="challenge_category" @click="send_router(key)">
          <h3>{{ key }}</h3>
          <ul>
            <li v-for="value in category" :key="value">
              {{ value }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <h2> 공익성 첼린지 </h2>
    <div id="public_interest_challenge">
      <ul>
        <li v-for="(category, key) in morality_category" :key="key" class="challenge_category" @click="send_router(key)">
          <h3>{{ key }}</h3>
          <ul>
            <li v-for="value in category" :key="value">
              {{ value }}
            </li>
          </ul>
        </li>
      </ul>
     
      
    </div>
    <h2> 유희성 첼린지 </h2>
    <div id="amusement_challenge">
      <ul>
        <li v-for="(category, key) in fun_category" :key="key" class="challenge_category" @click="send_router(key)">
          <h3>{{ key }}</h3>
          <ul>
            <li v-for="value in category" :key="value">
              {{ value }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <h2> 위험성 첼린지 </h2>
    <div id="amusement_challenge">
      <ul>
        <li v-for="(category, key) in danger_category" :key="key" class="challenge_category" @click="send_router(key)">
          <h3>{{ key }}</h3>
          <ul>
            <li v-for="value in category" :key="value">
              {{ value }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <h2> 기타 첼린지 </h2>
    <div id="other_challenge">
      <ul>
        <li v-for="(category, key) in other_category" :key="key" class="challenge_category" @click="send_router(key)">
          <h3>{{ key }}</h3>
          <ul>
            <li v-for="value in category" :key="value">
              {{ value }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
 
</template>

<script>
import {view_home} from '../api/homeapi.js'
// @ is an alias to /src
export default{
  data(){
    return{
      dance_category: {"k-pop":[],"j-pop":[],"pop":[]},
      morality_category:{"기부 켐페인":[],"코로나 19":[]},
      fun_category:{"동물":[],"핑거 스냅":[]},
      danger_category:{"기물파손":[]},
      other_category:{"other":[]}
    }
  },
  async mounted(){
    try{
        view_home().then((array)=>{
        for(var i=0;i<array.length;i++){
          //console.log(array[i]);
          console.log(array[i]["Bigcategory"]);

          console.log(array[i]["smallcategory"]);
          console.log("asdf");
          
          if(array[i]["Bigcategory"].includes('댄스')){
            if (Object.prototype.hasOwnProperty.call(this.dance_category, array[i]["smallcategory"])) {
              this.dance_category[array[i]["smallcategory"]].push(array[i]['subject']);
            }
          }
          else if(array[i]["Bigcategory"].includes('공익성')){
            if (Object.prototype.hasOwnProperty.call(this.morality_category, array[i]["smallcategory"])) {
              this.morality_category[array[i]["smallcategory"]].push(array[i]['subject']);
            }
          }
          else if(array[i]["Bigcategory"].includes('유희')){
            if (Object.prototype.hasOwnProperty.call(this.fun_category, array[i]["smallcategory"])) {
              this.fun_category[array[i]["smallcategory"]].push(array[i]['subject']);
            }
          }
          else if(array[i]["Bigcategory"].includes('위험')){
            if (Object.prototype.hasOwnProperty.call(this.danger_category, array[i]["smallcategory"])) {
              this.danger_category[array[i]["smallcategory"]].push(array[i]['subject']);
            }
          }
          else{
            this.other_category["other"].push(array[i]["smallcategory"]);
          }
         
        }
        console.log(this.dance_category)
      })
      
    } catch(error){
      console.log(error);
    }
  },
  methods:{
    send_router(key){
      console.log("key")
      console.log(key);
      this.$router.push({ path: 'category', query: { key }})
      //this.$router.push({ name: 'CategoryDetail', params: { key } });
    }
  }
}
</script>
<style>
.challenge_category{
  display: inline-block;
  margin: 10px;
}
</style>
