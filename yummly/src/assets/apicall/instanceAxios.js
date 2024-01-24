import axios from "axios";

const BASE_URL=import.meta.env.VITE_API_BASE_URL

// Create a function to get the token from local storage
const getToken = () => {
    return localStorage.getItem('token');
  };

export const instanceAxios = axios.create({
    baseURL: BASE_URL,
    headers:{
        Authorization:`${getToken()}` 
    }
})


// Add an interceptor to update the Authorization header with the latest token before each request

instanceAxios.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });