import client from "./client";
import authStorage from "../auth/storage";

const endpointSendMessage = "/msg/send";

const headers =  {
  'Content-Type': 'application/json'             
}

const sendMessage = async (messageText) => {
  const token = await authStorage.getToken();

  client.setHeaders({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });

  const message = {Msg : messageText}
  const response = await client.post(endpointSendMessage, message, {headers: headers});
  console.log(response)
  return response;
};

export { sendMessage };
