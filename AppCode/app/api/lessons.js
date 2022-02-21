import client from "./client";

const endpoint = "/lesson/getLessons";

const getLessons = async () => client.get(endpoint);

export default getLessons;
