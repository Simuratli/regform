import authentication from '../b2c';
import axios from 'axios';

const { accessToken } = authentication.getAccessToken();

// const BASE_URL = process.env.NODE_ENV === 'development'
//     ? 'http://localhost:5000/api/v1/'
//     : `https://my-uds-systems-website-development.azurewebsites.net/api/v1/`;
const BASE_URL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/api/v1/'
    : `https://my.uds.systems/api/v1/`;

const httpClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
});

const resolve = res => res;

const reject = history => err => {
    const { status } = err.response;
    if (status === 401) {
        authentication.signOut();
    } else if (status === 404) {
        history.push('/404')
    } else {
        return Promise.reject(err);
    }
}

function initializeHttpClientSettings(history) {
    httpClient.interceptors.response.use(resolve, reject(history))
}

export { httpClient, initializeHttpClientSettings }
