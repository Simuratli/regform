import authentication from '../b2c';
import environment from "../environment";

authentication.initialize({
    instance: 'https://udscustomersdirectory.b2clogin.com/tfp/',
    tenant: 'udscustomersdirectory.onmicrosoft.com',
    signInPolicy: 'B2C_1_SignUp_SignIn',
    forgetPasswordPolicy: 'B2C_1_PasswordReset',
    clientId: 'dd6f04a9-3f48-418c-bd64-76b3465b4ef6',
    cacheLocation: 'localStorage',
    scopes: [
        'https://udscustomersdirectory.onmicrosoft.com/uds-portal/prod/user_impersonation',
        'https://udscustomersdirectory.onmicrosoft.com/uds-portal/prod/write',
        'https://udscustomersdirectory.onmicrosoft.com/uds-portal/prod/read'
    ],
    redirectUri: environment.REDIRECT_URI,
    postLogoutRedirectUri: environment.REDIRECT_URI
});
