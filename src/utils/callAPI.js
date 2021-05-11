import axios from "axios";
import * as config from './../constant/Config';

export default function callAPI(method = "GET", endpoint, dataregister) {

    return (
        axios({
            method: `${method}`,
            url: `${config.API_URL}${endpoint}`,
            data: dataregister
        }).catch((error) => {
            alert(error)
        })
    )
}