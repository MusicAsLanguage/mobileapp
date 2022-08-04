import client from "./client";
import logOut from "../auth/useAuth"
import authStorage from "../auth/storage";

const endpointGetActivityStatus = "/activity/getStatus";
const endpointUpdateActivityStatus = "/activity/updateStatus";

const endpointGetSongPlayingStatus = "/activity/getSongPlayingStatus";
const endpointUpdateSongPlayingStatus = "/activity/updateSongPlayingStatus";

const getActivityStatus = async () => {
  const token = await authStorage.getToken();
  if (token == null) {
    return null;
  }

  client.setHeaders({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });

  const response = await client.get(endpointGetActivityStatus);
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

  const response = await client.post(endpointUpdateActivityStatus, data);
  return response;
};

const getSongPlayingStatus = async () => {
  const token = await authStorage.getToken();
  if (token == null) {
    return null;
  }

  client.setHeaders({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });

  const response = await client.get(endpointGetSongPlayingStatus);
  return response;
};

const updateSongPlayingStatus = async (data) => {
  const token = await authStorage.getToken();
  if (token == null) {
    return null;
  }

  client.setHeaders({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });

  const response = await client.post(endpointUpdateSongPlayingStatus, data);
  return response;
};

export { getActivityStatus, updateActivityStatus, getSongPlayingStatus, updateSongPlayingStatus };
