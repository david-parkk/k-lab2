
<template>
    <div class="profile">
      <h2>CHALLIFY</h2>
      <form @submit.prevent="submitForm">
        <div id="usernamme">
            <input type="text" v-model="nickname" placeholder="Username" />
        </div>
        <div id='password'>
            <input type="password" v-model="password" placeholder="Password" />
        </div>
        <div id='age'>
            <input type="text" v-model="age" placeholder="age" />
        </div>
        <div id="login">
            <button type="submit" @click="submit_form">Login</button>
        </div>
        <div id="Signup">
            <button type="submit" >Signup</button>
        </div>
        <div>
            {{ show_login }}
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import {register_user} from '../api/login.js';
  import Store from '../api/store.js';
  export default {
    data() {
        return {
            nickname: "",
            password: "",
        };
    },
    name: 'ProfileView',
    mounted(){
        console.log("mount!");
        Store.commit('checktoken');
    },
    methods: {
        submit_form() {
            const credentials = {
                nickname: this.nickname,
                password: this.password,
            };
            console.log(credentials.nickname);
            console.log(credentials.password);
            //axios.post('/something/login', credentials)
            //axios.post(instance, credentials)
            register_user(credentials); 
        },
        
    },
    computed:{
        show_login(){
            if(Store.getters.get_login==false)
                return 0;
            else
                return 1;
        }
    }
  }
  </script>
  