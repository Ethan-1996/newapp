
import router from '../router/index.js';
export default function getInfo(info) {
    //赋值 token 和 id
    if(localStorage.getItem('accessToken')){
        info.user_info = localStorage.getItem('accessToken')
        info.user_id = localStorage.getItem('user_id')
        return true
    }else if(sessionStorage.getItem('accessToken')){
        info.user_info = sessionStorage.getItem('accessToken')
        info.user_id = sessionStorage.getItem('user_id')
        return true
    }else{
        router.push("/Login")
        return false
    }
  }
          