import request from '@/utils/request'
import crypto from 'crypto';
const md5 = crypto.createHash('md5');

const makeSign = ($data, $appSecret) =>{

    let $str = '';
    let $index = 0;
    let $sortPor = [];

    for (let key in $data) {
        $sortPor.push(`${key}=${$data[key]}`);
    }
    // 排序
    $sortPor.sort();

    // 转url
    for (let key in $sortPor) {
        $str =`${$str}${$index === 0 ? '' : '&'}${$sortPor[key]}`;
        $index++;
    }

    // md5加密
    const $ret = md5.update(`${$str}&key=${$appSecret}`).digest('hex');
    //console.log($ret,"1212121212")
    return $ret;
}

const appSecret = 'aa926ff81382358eb61e3b55d766ab88'; //应用的Secret

// const data = {
//     version:'v1.1.0',// API接口版本号
//     appKey:'5db29d7f3e2b7',// 应用分配的appKey
// };



// const BASE_QUERY = {
//     appKey:data.appKey,
//     version:data.version,
//     sign:makeSign(data,appSecret)
// }
// const IndexUrl= Header + '/index/Login/sendCode'; //发送手机验证码
// export function sendCode(query) {
//   return request({
//     params:query,
//     url: IndexUrl,
//     method: 'get'
//   })
// }

// const addUserUrl= Header + '/index/Login/addUser'; //用户注册
// export function addUser(data) {
//   return request({
//     data:data,
//     url: addUserUrl,
//     method: 'post'
//   })
// }



const HEADER = '/haha'

// const HEADER = 'https://openapi.dataoke.com'


const catalogueUrl= HEADER + '/api/goods/topic/catalogue'; //精选商品
export function catalogue() {
  return request({
    params:BASE_QUERY,
    url: catalogueUrl,
    method: 'get'
  })
}


const activitycatalogueUrl= HEADER + '/api/goods/activity/catalogue'; //精选商品
export function activitycatalogue(query) {
  return request({
    params:{...query,sign:makeSign(query,appSecret)},
    url: activitycatalogueUrl,
    method: 'get'
  })
}



const topiclistUrl= HEADER + '/api/goods/topic/goods-list'; //精选商品
export function topiclist(query) {
  return request({
    params:{...query,sign:makeSign(query,appSecret)},
    url: topiclistUrl,
    method: 'get'
  })
}

const activitylistUrl= HEADER + '/api/goods/activity/goods-list'; //精选商品
export function activitylist(query) {
  return request({
    params:{...query,sign:makeSign(query,appSecret)},
    url: activitylistUrl,
    method: 'get'
  })
}


const ninelistUrl= HEADER + '/api/goods/nine/op-goods-list'; //9.9商品
export function ninelist(query) {
  return request({
    params:{...query,sign:makeSign(query,appSecret)},
    url: ninelistUrl,
    method: 'get'
  })
}