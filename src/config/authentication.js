import authentication from '../b2c';

// const redirectUri = process.env.NODE_ENV === 'production'
//     ? `https://my-uds-systems-website-development.azurewebsites.net`
//     : 'http://localhost:6420'

const redirectUri = process.env.NODE_ENV === 'production'
    ? `https://my.uds.systems`
    : 'http://localhost:6420'

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
    redirectUri,
    postLogoutRedirectUri: redirectUri
});
