import {useCookies} from 'vue3-cookies';
const {cookies} = useCookies();
function set_cookie(user_data){
    //console.log(user_data.user.nickname);
    //console.log(user_data.token);
    
    console.log("adsf");
    //cookies.set("nickname", user_data.user.nickname);
    cookies.set("token", user_data);
    console.log("adsf");
}
function set_cookie_id(user_data){
    console.log("쿠키를 넣어볼까");
    console.log(decodeURIComponent(user_data));
    cookies.set("id",user_data);
}
function get_cookie_id(){
    return cookies.get("id");
}
function get_cookie(){
    console.log("nickname");
    console.log(cookies.get("token"));
    return cookies.get("token");
}

//export {set_cookie,get_cookie}
export {set_cookie,get_cookie,set_cookie_id,get_cookie_id}