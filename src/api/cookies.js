import {useCookies} from 'vue3-cookies';
const {cookies} = useCookies();
function set_cookie(user_data){
    cookies.set("token", user_data);
}
function set_cookie_id(user_data){
    cookies.set('id',user_data);
}
function set_cookie_age(age){
    cookies.set("age",age);
}
function get_cookie_id(){
    return cookies.get("id");
}
function get_cookie(){
    console.log("nickname");
    console.log(cookies.get("token"));
    return cookies.get("token");
}
function get_cookie_age(){
    return cookies.get("age");
}
function delete_cookie(){
    cookies.remove('age');
    cookies.remove('id');
    cookies.remove('token');
}
export {set_cookie,get_cookie,set_cookie_id,get_cookie_id,get_cookie_age,set_cookie_age,delete_cookie}