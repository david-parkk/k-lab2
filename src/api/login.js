import axios from 'axios';
import store from './store.js';
//import {set_cookie,get_cookie} from "./cookies.js"

const instance = axios.create({
 // baseURL: 'http://3.37.96.143:8000',
 baseURL: 'http://localhost:3000/api',
});

function register_user(userData) {
  console.log("요청보냄");
  axios.post('/login/', userData, { baseURL: instance.defaults.baseURL})
  .then((res)=>{
    //토큰 처리필요!!!!
    const data = res.data;
    console.log("신호가는중");
    if (data) {
      console.log('success');
      store.commit('signin',data);
      console.log("data");
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
export {register_user};