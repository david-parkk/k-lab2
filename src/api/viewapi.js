import axios from 'axios';
import instance from "./axiosapi"

async function view_catogary() {
    try {
      const res = await axios.get('board/', { baseURL: instance.defaults.baseURL });
      console.log("res.data", res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
}
function post_content(data){
  console.log("boarddata",data);
   axios.post('board/',data, { baseURL: instance.defaults.baseURL})
    .then((res)=>{
        console.log("res.data",res.data);
        
        return res.data;
    })
    .catch((error)=>{
        console.log(error);
      })
}
export {view_catogary,post_content};