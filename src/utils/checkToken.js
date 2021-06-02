import axios from 'axios';
import jwt_decode from 'jwt-decode';
import config from './../constant/Config';

// Step-1: Create a new Axios instance with a custom config.

const checkToken = () => {
    const token = localStorage.getItem('tk');
    const decode = jwt_decode(token);

    const expirationDate = new Date();
    expirationDate.setTime(decode.exp * 1000);

    const today = new Date();

    return expirationDate.getTime() <= today.getTime();
};

const refreshToken = (cb) => {
    const isExp = checkToken();
    // console.log(isExp);
    if (isExp) {
        const REFRESH_AUTH_TOKEN = localStorage.getItem('rtk');
        axios
            .post(`${config}user/refresh_token`, {
                refreshToken: REFRESH_AUTH_TOKEN,
            })
            .then((response) => {
                if(response.data.errorCode === 403){
                    localStorage.clear();
                }
                localStorage.setItem('tk', response.data.data.token);
                localStorage.setItem('rtk', response.data.data.refreshToken);
                cb.map((item) => item && item());
            })
            .catch((error) =>  localStorage.clear());
    } else {
        cb.map((item) => item && item());
    }
};
export default refreshToken;
