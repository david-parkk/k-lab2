import { createStore } from "vuex";
import {set_cookie,get_cookie,set_cookie_id,get_cookie_id} from "./cookies";
//import {set_cookie,get_cookie} from "./cookies.js"
const store=createStore({
  state: {
    token: undefined,
    nickname: undefined,
    islogin: false,
    age: undefined
  },
  getters: {
    get_login(state) {//mounted에서 실행한다. token 값이 비어 있으면 쿠키값을 통해 vuex를 최신화한다.
      return state.islogin;
    },
    get_nickname(state){
      return state.nickname;
    },
    get_token(state){
      return state.token;
    }
  },
  mutations: {
    checktoken(state){
      if((state.token=get_cookie())!=undefined){
        console.log("해냈다");
        state.islogin=true;
        
        state.nickname=get_cookie_id();
        return true;
      }
      return false;
    },
    signin(state, value) {
      state.token = value;
      state.islogin=true;
      console.log(value);
      set_cookie(value.access_token);
      console.log("signin");
      console.log(state.token);
    },
    logout(state){
        state.token=undefined;
        state.islogin=false;
    },
    setid(state,value){//check api가 만들어지면 삭제해야합니다
      state.nickname=value;
      set_cookie_id(value);
    }
  }
});
export default store;
