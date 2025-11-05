import axios from "axios";

const instance = axios.create({
     baseURL: 'https://smart-deals-db-server.onrender.com',
})
const useAxios = ()=>{
    return instance;
}
export default useAxios;