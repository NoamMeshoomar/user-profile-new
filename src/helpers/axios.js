import axios from "axios";

const BRIDGIFY_API_ENDPOINT = 'https://api.dev.bridgify.io';

const axiosInstance = axios.create({
    baseURL: BRIDGIFY_API_ENDPOINT
});

export default axiosInstance;