<template>
    <div class="profile">
      
      <h2>CHALLIFY</h2>
      <form @submit.prevent="submitForm">
        <div id="usernamme">
            <input type="text" v-model="username" placeholder="Username" />
        </div>
        <div id='password'>
            <input type="password" v-model="password" placeholder="Password" />
        </div>
        <div id="login">
            <button type="submit">Login</button>
        </div>
        <div id="Signup">
            <button type="submit" @click="submit_form">Signup</button>
        </div>
      </form>

    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    name: 'ProfileView',
    
    methods: {
       
        submit_form() {
            console.log("asdfsss");
            const credentials = {
                username: this.username,
                password: this.password,
            };
            console.log(credentials.username);
            console.log(credentials.password);
            console.log("gogo");
            //axios.post('/something/login', credentials)
            axios.post('http://localhost:3000/api/login', credentials)
            .then((res)=>{
                const data = res.data;
                if (data.success) {
                // 서버로부터 유저 정보나 토큰을 받아와 처리
                    //const user = data.user;
                    console.log('success');
                    //const accessToken = data.accessToken;
                  // 프론트엔드에서 로그인 상태 설정 등 추가 작업
                } 
                else {
                // 로그인 실패 처리
                    console.log('failed');
                    //const errorMessage = data.message;
                // 에러 메시지를 프론트엔드에 표시하거나 처리
                }
                //console.log(response);
            })
            .catch((error)=>{
                console.log("loginfailed");
                console.log(error);
            })
            console.log("end");
        }
    }
  }
  </script>
  