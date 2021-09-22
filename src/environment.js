const PRODUCTION_ENVIRONMENT = 'production',
    DEVELOPMENT_ENVIRONMENT = 'development',
    STAGE_ENVIRONMENT = 'stage';

const environment = (() => {
    switch (process.env.REACT_APP_ENV) {
        case DEVELOPMENT_ENVIRONMENT:
            return {
                BASE_URI: 'http://localhost:5000/api/v1/',
                REDIRECT_URI: 'http://localhost:6420'
            };

        case PRODUCTION_ENVIRONMENT:
            return {
                BASE_URI: 'https://my.uds.systems/api/v1/',
                REDIRECT_URI: 'https://my.uds.systems'
            };

        case STAGE_ENVIRONMENT:
            return {
                BASE_URI: 'https://my-uds-systems-website-development.azurewebsites.net/api/v1/',
                REDIRECT_URI: 'https://my-uds-systems-website-development.azurewebsites.net/'
            };

        default:
            throw new Error(`Not valid environment: ${process.env.REACT_APP_ENV}`);
    }
})();

export default environment;