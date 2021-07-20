import client from "./client";
import logOut from "../auth/useAuth"
import authStorage from "../auth/storage";

const endpointGetStatus = "/activity/getStatus";
const endpointUpdateStatus = "/activity/updateStatus";

const getActivityStatus = async () => {
  const token = await authStorage.getToken();
  if (token == null) {
    return null;
  }

  client.setHeaders({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });

  const response = await client.get(endpointGetStatus);
  return response;
};

const updateActivityStatus = async (data) => {
  const token = await authStorage.getToken();
  if (token == null) {
    return null;
  }

  client.setHeaders({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });

  const response = await client.post(endpointUpdateStatus, data);
  return response;
};

export { getActivityStatus, updateActivityStatus };
