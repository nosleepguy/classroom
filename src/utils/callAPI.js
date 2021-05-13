import axios from "axios";
import * as config from './../constant/Config';

export default function callAPI(method = "GET", endpoint, dataregister) {
    let AUTH_TOKEN = localStorage.getItem("tk")
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
    
    return (
        axios({
            method: `${method}`,
            url: `${config.API_URL}${endpoint}`,
            data: dataregister,
        })
            .catch((error) => {
                console.log(error);
            })
    )

    
}