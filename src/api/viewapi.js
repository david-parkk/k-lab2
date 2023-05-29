import axios from 'axios';

const instance = axios.create({
  
  baseURL: 'http://3.37.96.143:8000/'
});

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

async function view_comment(data) {
  try {
    const res = await axios.post('comment/', data, {
      baseURL: instance.defaults.baseURL
    });
    console.log("res.data", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


function post_comment(data){
  console.log("commentdata",data);
   axios.post('comment/post/',data, { baseURL: instance.defaults.baseURL})
    .then((res)=>{
        console.log("res.data",res.data);
        
        return res.data;
    })
    .catch((error)=>{
        console.log(error);
      })
}
export {view_catogary,post_content};
export{view_comment,post_comment};