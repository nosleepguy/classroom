import axios from 'axios';
import config from "./../constant/Config";

// Step-1: Create a new Axios instance with a custom config.

const customAxios = axios.create({
    baseURL: config,
    timeout: 30000,
});
// Step-2: Create request, response & error handlers

const requestHandler = request => {
    // Token will be dynamic so we can use any app-specific way to always   
    // fetch the new token before making the call
    let AUTH_TOKEN = localStorage.getItem("tk");
    request.headers.Authorization = AUTH_TOKEN;
    return request;
};

const responseHandler = response => {
    return response;
};

const errorHandler = error => {
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