import axios from 'axios';
import instance from "./axiosapi"

async function view_home(){
    try {
        const res = await axios.get('home/',{baseURL: instance.defaults.baseURL});
        return res.data;
    } catch (error){
        console.log(error);
        throw error
    }


}

export {view_home}