import client from './client';

const signupEndpoint = '/auth/signup';
const loginEndpoint = '/auth/login';

//signupJson should look like:
//{"name": "Jane Doe", "email":"janedoe@microsoft.com", "password":"xxxx"}
const signup = () => client.post(
    signupEndpoint,
    signupJson,
    {
        headers: {
            'Content-Type': 'application/json'             
        }
    }
    );

//loginJson should look like:
//{"email":"janedoe@microsoft.com", "password":"xxxx"}
const login = (loginJson) => client.post(
    loginEndpoint,
    loginJson,
    {
        headers: {
            'Content-Type': 'application/json'             
        }
    }
    );

export default {
    login,
    signup,
}