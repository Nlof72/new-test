import axios from "axios";

//Также по хорошему сюда необходимл будет добавить токен для авторизации и увеличения лимитов
/*  
Для увеличения лимитов просто добавить после запятой ниже
 headers:{
    Authorization: 'Bearer token'
}
*/

export const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_BACK ?? "https://api.github.com",
});
