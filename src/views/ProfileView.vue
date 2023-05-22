
<template>
    <div  v-if="!this.is_loggin" id="signin_div">
      <h2>CHALLIFY</h2>
      <form @submit.prevent="submitForm">
        <div id="username">
            <input type="text" v-model="nickname" placeholder="Username" />
        </div>
        <div id='password'>
            <input type="password" v-model="password" placeholder="Password" />
        </div>
        <div id='age'>
            <input type="text" v-model="age" placeholder="age" />
        </div>
        <div id="login">
            <button type="submit" @click="post_signin">Login</button>
        </div>
        <div id="Signup">
            <button type="submit" >Signup</button>
        </div>
        <div>
            {{ show_login }}
        </div>
      </form>
    </div>
    <div id="signup_div">
        <h2>Create Account</h2> 
        <div id="username_up">
            <input type="text" v-model="nickname" placeholder="Username" />
        </div>
        <div id='password_up'>
            <input type="test" v-model="password" placeholder="Password" />
        </div>
        <div id='date_of_birth_up'>
            <input type="text" v-model="age" placeholder="Date of birth" />
        </div>
        <div id="signup_button">
            <button @click="post_signup">signup!!</button>
        </div>
    </div>
    <div id="profile_div">
        <h3>ID</h3>
        <div>
            {{ this.nickname }}
        </div>
        <h3>Date of Birth</h3>
        <div>
            {{ this.password }}
        </div>
        <div id="logout_button">
            <button>로그아웃</button>
        </div>
    </div>
  </template>
  
  <script>
  import {login_user,register_user,check_user}from '../api/login.js';
  import Store from '../api/store.js';
  export default {
    data() {
        return {
            nickname: "",
            password: "",
            age:" ",
            is_loggin:false,
        };
    },
    name: 'ProfileView',
    mounted(){
        console.log("mount!");
        Store.commit('checktoken')
        this.is_loggin=Store.getters.get_login;
        console.log("login: ",this.is_loggin);
        if(this.is_loggin)
            console.log("check:",check_user(Store.getters.get_token));
       
       
    },
    methods: {
        post_signin() {
            const credentials = {
                nickname: this.nickname,
                password: this.password,
              
            };
            console.log(credentials.nickname);
            console.log(credentials.password);
            login_user(credentials);
            
        },
        post_signup(){
            const credentials = {
                nickname: this.nickname,
                password: this.password,
                age:this.age
            };
            register_user(credentials); 
        }
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
  