import axios from "axios";


const configAPI = axios.create({
  
    baseURL:"https://jsonplaceholder.typicode.com"

})


export default configAPI;

