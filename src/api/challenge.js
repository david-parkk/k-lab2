import axios from "axios"
import instance from "./axiosapi"
async function view_challenge_detail(key) {
    var url='home/smallcategory/content/'+key+'/'
    try {
      const res = await axios.get(url, { baseURL: instance.defaults.baseURL });
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
}

export {view_challenge_detail};