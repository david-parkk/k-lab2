import axios from "axios"
import instance from "./axiosapi"
async function view_challenge() {
    try {
      const res = await axios.get('home/smallcategory/', { baseURL: instance.defaults.baseURL });
      console.log("res.data", res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
}

export {view_challenge};