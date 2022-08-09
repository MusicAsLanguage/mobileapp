import client from "./client";
import authStorage from "../auth/storage";

const deleteUserEndPoint = "/user/deleteUserAndData";

const deleteuser = async () => {
  const token = await authStorage.getToken();

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  client.setHeaders(headers);
  const response = client.delete(deleteUserEndPoint);

  return response;
};

export { deleteuser };
