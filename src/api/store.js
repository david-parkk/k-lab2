import { createStore } from "vuex";
import {set_cookie,get_cookie,set_cookie_id,get_cookie_id,get_cookie_age,set_cookie_age,delete_cookie} from "./cookies";
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
    },
    get_age(state){
      return state.age;
    }
  },
  mutations: {
    checktoken(state){
      if((state.token=get_cookie())!=undefined){
        state.nickname=get_cookie_id();
        state.islogin=true;
        state.age=get_cookie_age();
        return true;
      }
      return false;
    },
    signin(state, value) {
      state.token = value;
      state.islogin=true;
      set_cookie(value);
    },
    logout(state){
        delete_cookie();
        state.token= undefined,
        state.nickname= undefined,
        state.islogin= false,
        state.age= undefined
    },
    set_id(state,value){//check api가 만들어지면 삭제해야합니다
      state.nickname=value;
      set_cookie_id(value);
    },
    set_age(state,age){
      state.age=age;
      set_cookie_age(age);
    }
  }
});
export default store;
