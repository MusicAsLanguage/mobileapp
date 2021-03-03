import client from './client';

const endpoint = '/getLessons';

const getLessons = () => client.get(endpoint);

export default getLessons;