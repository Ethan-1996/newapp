import axios from 'axios';
import { Notify } from 'vant';
import router from '../router/index.js';

const request = axios.create({
    withCredentials: true,
});
request.interceptors.response.use(
    response => response,
    (error) => {
        const { response } = error;
        const { status } = response;
        switch (status) {
            case 403:
                router.push({
                    path: '/login',
                });
                break;
            default:
                break;
        }
        Notify({ type: 'danger', message: response.data.message || '未知错误' });
        //Message.error(response.data.message || '未知错误');
        return Promise.reject(error);
    },
);
export default request