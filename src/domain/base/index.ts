import axios from "axios";


//TODO:В будущем выносится в .env сейчас остнется так для упрощения работы
//Также по хорошему сюда необходимл будет добавить токен для авторизации и увеличения лимитов
/*  
Для увеличения лимитов просто добавить после запятой ниже
 headers:{
    Authorization: 'Bearer token'
}
*/

export const axiosConfig = axios.create({
    baseURL: 'https://api.github.com',
  })
