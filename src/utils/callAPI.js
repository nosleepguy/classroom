
import * as config from './../constant/Config';

import axios from "./customAxios";

export default function callAPI(method = "GET", endpoint, data) {
    let AUTH_TOKEN = localStorage.getItem("tk")
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
    
    return (
        axios({
            method: `${method}`,
            url: `${config.API_URL}${endpoint}`,
            data
        })
            .catch((error) => {
                console.log(error);
            })
    )

    
}