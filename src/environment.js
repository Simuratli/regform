const environment = (() => {
    switch (process.env.REACT_APP_ENV) {
        case "development":
            return {
                BASE_URI: 'http://localhost:5000/api/v1/',
                REDIRECT_URI: 'http://localhost:6420'
            };

        case "production":
            return {
                BASE_URI: 'https://my.uds.systems/api/v1/',
                REDIRECT_URI: 'https://my.uds.systems'
            };

        case "stage":
            return {
                BASE_URI: 'https://my-uds-systems-website-development.azurewebsites.net/api/v1/',
                REDIRECT_URI: 'https://my-uds-systems-website-development.azurewebsites.net/'
            };

        default:
            throw new Error("No valid environment");
    }
})();

export default environment;