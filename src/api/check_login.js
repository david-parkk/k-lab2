import axios from 'axios';


async function view_catogary(token) {
    const instance = axios.create({
        
        //baseURL: 'http://localhost:3000/api',
       
    });
    console.log("token: ",token.access_token);
    try {
        const res = await axios.get('/check/', {
            headers: {
              'Authorization': 'API Key ' + token.access_token,
            'tokenkey': token.access_token
            },
            baseURL: instance.defaults.baseURL
          });
    
     // const res = await axios.get('/check/', { baseURL: instance.defaults.baseURL });
      console.log("view_catogary", res.token);
      return res.data;
    } catch (error) {
        console.log("에러발생")
      console.log(error);
      throw error;
    }
}
export {view_catogary}