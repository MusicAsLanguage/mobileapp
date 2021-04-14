import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'https://malservice.azurewebsites.net/api',
});

export default apiClient;