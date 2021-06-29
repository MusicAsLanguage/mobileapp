import client from './client';

const headers =  {
    'Content-Type': 'application/json'             
}
const signupEndpoint = '/auth/signup';
const loginEndpoint = '/auth/login';
const pwdResetEndpoint = '/auth/forgotPwd';

const signup = (input) => client.post(signupEndpoint, input, {headers: headers});

const login = (input) => client.post(loginEndpoint, input, {headers: headers});

const pwdReset = (input) => client.post(pwdResetEndpoint, input, {headers: headers});

export {
    signup,
    login,
    pwdReset
}