import axios from 'axios';
import config from "./../constant/Config";

// Step-1: Create a new Axios instance with a custom config.

const customAxios = axios.create({
    baseURL: config,
    timeout: 30000,
    headers: { 'Content-Type': 'application/json', }
});

// Step-2: Create request, response & error handlers
let req
const requestHandler = request => {
    req = request;
    // Token will be dynamic so we can use any app-specific way to always   
    // fetch the new token before making the call
    let AUTH_TOKEN = localStorage.getItem("tk");
    request.headers.Authorization = AUTH_TOKEN;
    console.log("da nhan request");
    // console.log(AUTH_TOKEN);
    return request;
};

const responseHandler = response => {
    return response;
};

// thay token trong req 
const changereq = (req) => {
    let newreq = JSON.parse(JSON.stringify(req));
    let AUTH_TOKEN = localStorage.getItem("tk");
    newreq.headers.Authorization = AUTH_TOKEN;
    console.log(newreq);
    return newreq;
}
const errorHandler = async error => {
    console.log(error.response.data.errorCode)
    console.log("da nhan response");
    console.log(req);
    if (error.response.data.errorCode === 400 || error.response.data.errorCode === 401) {
        let REFRESH_AUTH_TOKEN = localStorage.getItem("rtk");
        await axios
            .post(`${config}user/refresh_token`, {
                refreshToken: REFRESH_AUTH_TOKEN,
            })
            .then(async (response) => {
                console.log(response);
                await localStorage.setItem("tk", response.data.data.token);
                await localStorage.setItem("rtk", response.data.data.refreshToken);
                console.log("da doi token");
            })
            .catch((error) => console.log(error.response));
        requestHandler(changereq(req))
    }
    return Promise.reject(error);
};

customAxios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
);


export default customAxios;