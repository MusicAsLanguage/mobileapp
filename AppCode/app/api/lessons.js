import client from './client';

const endpoint = '/lesson/getLessons';

const getLessons = () => client.get(endpoint);

export default getLessons;