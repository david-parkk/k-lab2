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


function get_cookie(){
    console.log("nickname");
    console.log(cookies.get("token"));
    return cookies.get("token");
}

//export {set_cookie,get_cookie}
export {set_cookie,get_cookie}