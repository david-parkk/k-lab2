import axios from 'axios';
import store from './store.js';
import instance from "./axiosapi"

function login_user(userData){
  console.log("요청보냄");
  axios.post('/login/', userData, { baseURL: instance.defaults.baseURL})
  .then((res)=>{
    const data = res.data;
    if (data) {
      store.commit('signin',data.access_token);
      store.commit('set_id',userData.nickname);
      store.commit('set_age',20);//아직 처리되지 않았아
    } 
    else {
      console.log('failed');
    }
  })
  .catch((error)=>{
    console.log(error);
  })
}
function register_user(userData) {
  axios.post('/sign/', userData, { baseURL: instance.defaults.baseURL})
  .then((res)=>{
    const data = res.data;
    if (data) {
      console.log('success');
      console.log(data);
      
    } 
    else {
    // 로그인 실패 처리
      console.log('failed');
    }
  })
  .catch((error)=>{
    console.log(error);
  })
  console.log("비동기 실행중");
}
function check_user(token){
  axios.get('/check/', token, { baseURL: instance.defaults.baseURL})
  .then((res)=>{
    //토큰
    return res;
  })
  .catch((error)=>{
    console.log(error);
  })
}
function logout(){
  store.commit('logout')
}
export {login_user,register_user,check_user,logout};