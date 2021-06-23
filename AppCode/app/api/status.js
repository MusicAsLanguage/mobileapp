import client from "./client";
import authStorage from "../auth/storage";

const endpointGetStatus = "/activity/getStatus";
const endpointUpdateStatus = "/activity/updateStatus";

const getStatus = async () => {
  const token = await authStorage.getToken();

  client.setHeaders({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });

  const response = await client.get(endpointGetStatus);
  return response;
};

const updateStatus = async (data) => {
  const token = await authStorage.getToken();

  client.setHeaders({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });

  const response = await client.post(endpointUpdateStatus, data);
  return response;
};

export { getStatus, updateStatus };
