import client from './client';

const headers =  {
    'Content-Type': 'application/json'             
}
const signupEndpoint = '/auth/signup';

const signup = (input) => client.post(signupEndpoint, input, {headers: headers});

const loginEndpoint = '/auth/login';
const login = (input) => client.post(loginEndpoint, input, {headers: headers});


export {
    signup,
    login
}