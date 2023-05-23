
<template>
    <div  v-if="!this.is_loggin&&!is_signup" id="signin_div">
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
            <button type="submit" @click="is_signup=!is_signup">Signup</button>
        </div>
        <div>
            {{ show_login }}
        </div>
      </form>
    </div>
    <div v-if="this.is_signup" id="signup_div">
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
        <button  @click="is_signup=!is_signup">X</button>
    </div>
    <div v-if="this.is_loggin" id="profile_div">
        <h3>ID</h3>
        <div>
            {{ this.nickname }}
        </div>
        <h3>Date of Birth</h3>
        <div>
            {{ this.age }}
        </div>
        <div id="logout_button">
            <button @click="post_logout" >로그아웃</button>
        </div>
    </div>
  </template>
  
  <script>
  import {login_user,register_user,check_user,logout}from '../api/login.js';
  import Store from '../api/store.js';
  export default {
    data() {
        return {
            nickname: "",
            password: "",
            age:" ",
            is_loggin:false,
            is_signup:false,
        };
    },
    name: 'ProfileView',
    mounted(){
        Store.commit('checktoken')
        this.is_loggin=Store.getters.get_login;
        this.nickname=Store.getters.get_nickname;
        this.age=Store.getters.get_age;
        check_user(Store.getters.get_token)
    },
    methods: {
        post_signin() {
            const credentials = {
                nickname: this.nickname,
                password: this.password,
              
            };
            login_user(credentials);
            this.is_loggin  =!this.is_loggin;
        },
        post_signup(){
            const credentials = {
                nickname: this.nickname,
                password: this.password,
                age:this.age
            };
            this.is_signup=!this.is_signup;
            this.nickname="";
            this.is_loggin="";
            this.age="";
            register_user(credentials); 
        },
        post_logout(){
            logout();
            this.is_loggin=!this.is_loggin;
            return 0;
        }

    },
    computed:{
        show_login(){
            if(Store.getters.get_login==false)
                return 0;
            else
                return 1;
        },
       
    }
  }
  </script>
  