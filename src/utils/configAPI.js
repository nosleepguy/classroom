import axios from "axios";

const instance = axios.create({
    baseURL: 'http://3.1.217.38/api/',
    timeout: 300000,
    headers: {
        'Content-Type': 'application/json',
    }
})

//get token o localStorage
function getLocalToken() {
    const token = window.localStorage.getItem('token')
    console.log('token >>>', token);
    return token
}

getLocalToken();

//get token o refreshToken
function getLocalRefreshToken() {
    const token = window.localStorage.getItem('refreshToken')
    return token
}

instance.setToken = (token) => {
    instance.defaults.headers['x-access-token'] = token
    window.localStorage.setItem('token', token)
}

// function getToken() {
//     return instance.post('user/login', {
//         username: 'hung@gmail.com',
//         password: 'hung',
//     })
// }

function refreshToken() {
    return instance.post('/user/refresh_token', {
        refreshToken: getLocalRefreshToken()
    })
}


// response parse
instance.interceptors.response.use((response) => {
    const { code, auto } = response.data
    if (code === 401) {
        if (auto === 'yes') {

            console.log('get new token using refresh token', getLocalRefreshToken())
            return refreshToken().then(rs => {
                console.log('get token refreshToken>>', rs.data)
                const { token } = rs.data
                instance.setToken(token);
                const config = response.config
                config.headers['x-access-token'] = token
                config.baseURL = 'http://3.1.217.38'
                return instance(config)

            })
        }
    }
    return response
}, error => {
    console.warn('Error status', error.response.status)
    // return Promise.reject(error)
    if (error.response) {
        return parseError(error.response.data)
    } else {
        return Promise.reject(error)
    }
})

