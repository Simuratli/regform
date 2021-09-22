import authentication from "../b2c";
import axios from "axios";
import environment from "../environment";

const { accessToken } = authentication.getAccessToken();

const httpClient = axios.create({
    baseURL: environment.BASE_URL,
    headers: {
        Authorization: `Bearer ${accessToken}`,
    }
});

const resolve = (res) => res;

const reject = (history) => (err) => {
    const { status } = err.response;
    if (status === 401) {
        authentication.signOut();
    } else if (status === 404) {
        history.push("/404");
    } else {
        return Promise.reject(err);
    }
};

function initializeHttpClientSettings(history) {
    httpClient.interceptors.response.use(resolve, reject(history));
}

export { httpClient, initializeHttpClientSettings };
