import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";
import { tokenRefresh } from "../api/auth";

const authKey = "authToken";
const refreshKey = "refreshToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(authKey, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getAuthToken = async () => {
  try {
    return await SecureStore.getItemAsync(authKey);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const getToken = async () => {
  try {
    const accessToken = await getAuthToken();

    // If current CRUD acces token expired, renew it using refresh token
    if (tokenExpired(accessToken)) {

      const refresh_token = await getRefreshToken();

      try {
        // Check refresh token is not expired, otherwise return null to indicate requiring a re-login
        if (tokenExpired(refresh_token)) {
          console.log("User need to login again");
          return null;
        }
        const response = await tokenRefresh(refresh_token);
        const newToken = response.data.token;

        // Once the "refreshed" token is retrieved, store it for future API calls
        storeToken(newToken);

        return newToken;
      } catch (error) {
        console.log("Error renewing the auth token", error)
        return null;
      }
    } else {
      return accessToken;
    }
  } catch (error) {
    console.log("Error getting the valid token", error);
    return null;
  }
};

const getUser = async () => {
  const token = await getAuthToken();
  return token ? JSON.parse(jwtDecode(token).sub) : null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(authKey);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

const getRefreshToken = async () => {
  try {
    const refreshToken = await SecureStore.getItemAsync(refreshKey);
    return refreshToken;
  } catch (error) {
    console.log("Error getting the refresh token", error);
  }
};

const removeRefreshToken = async () => {
  try {
    await SecureStore.deleteItemAsync(refreshKey);
  } catch (error) {
    console.log("Error removing the refresh token", error);
  }
};

const storeRefreshToken = async (refresh_token) => {
  try {
    await SecureStore.setItemAsync(refreshKey, refresh_token);
  } catch (error) {
    console.log("Error storing the refresh token", error);
  }
};

const tokenExpired = (token) => {
  const exp = jwtDecode(token).exp;

  const now = Date.now() / 1000;

  return (now > exp ? true : false);


}

export default { getUser, getToken, storeToken, storeRefreshToken, removeToken, removeRefreshToken };
