import { useContext } from 'react';
import jwtDecode from 'jwt-decode';

import AuthContext from './context';
import authStorage from './storage';

export default useAuth = () => {
    const { user, setUser } = useContext(AuthContext);

    const logIn = (data) => {

        const authToken = data.token;
        const refresh_token = data.refresh_token;

        const user = JSON.parse(jwtDecode(authToken).sub);
        console.log(user);
        setUser(user);
        authStorage.storeToken(authToken);
        authStorage.storeRefreshToken(refresh_token);
    };

    const logOut = () => {
        setUser(null);
        authStorage.removeToken();
        authStorage.removeRefreshToken();
    };

    return { user, logIn, logOut };
}