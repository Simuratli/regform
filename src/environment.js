const environment = {
    BASE_URL: "http://localhost:5000/api/v1/"
};

if (process.env.REACT_APP_ENV === "development") {
    environment.BASE_URL = "http://localhost:5000/api/v1/";
}

if (process.env.REACT_APP_ENV === "production") {
    environment.BASE_URL = "https://my.uds.systems/api/v1/";
}
if (process.env.REACT_APP_ENV === "stage") {
    environment.BASE_URL = "https://my-uds-systems-website-development.azurewebsites.net/api/v1/";
}

export default environment;
