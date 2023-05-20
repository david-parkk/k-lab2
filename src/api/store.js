import { createStore } from "vuex";
import {set_cookie,get_cookie} from "./cookies";
//import {set_cookie,get_cookie} from "./cookies.js"
const store=createStore({
  state: {
    token: undefined,
    nickname: undefined,
    islogin: false,
  },
  getters: {
    get_login(state) {//mounted에서 실행한다. token 값이 비어 있으면 쿠키값을 통해 vuex를 최신화한다.
      
      return state.islogin;
    }
  },
  mutations: {
    checktoken(state){
      if((state.token=get_cookie())!=undefined){
        state.islogin=true;
      }
    },
    signin(state, value) {
      state.token = value;
      state.islogin=true;
      set_cookie(value);
      console.log("signin");
      console.log(state.token);
    },
    logout(state){
        state.token=undefined;
        state.islogin=false;
    }
  }
});
export default store;
