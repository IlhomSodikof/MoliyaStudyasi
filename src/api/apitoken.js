import axios from "axios"
const token = localStorage.getItem("token")

export const axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
    timeout: 3000,
    headers: { 'X-Custom-Header': 'foobar',}    // Authorization: `Bearer ${token}` 
});