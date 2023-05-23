const axios = require('axios');
const data = '{\r\n    \r\n}';

function check_login(){
  const config = {
  method: 'get',
  maxBodyLength: Infinity,
 
  headers: { 
    'Content-Type': 'text/plain', 
   
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log("에러남");
  console.log(error);
});
}
export {check_login}