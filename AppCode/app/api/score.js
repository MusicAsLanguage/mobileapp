import client from "./client";
import authStorage from "../auth/storage";

const endpointGetUserScore = "/user/getUserScore";
const endpointUpdateUserScore = "user/updateUserScore";

const getUserScore = async () => {
  const token = await authStorage.getToken();
  if (token == null) return null;

  client.setHeaders({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });

  const response = await client.get(endpointGetUserScore);
  return response;
};

const updateUserScore = async (data) => {
  const token = await authStorage.getToken();
  if (token == null) return null;

  client.setHeaders({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });

  const response = await client.post(endpointUpdateUserScore, data);
  return response;
};

export { getUserScore, updateUserScore };
