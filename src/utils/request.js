import axios from "axios";

// export const getUsersInfo = async (token) => {
//     return await axios.get('https://api-mixinfo.abba.uz/users/', {
//         headers: {
//             token: token ?? localStorage.getItem("token"),
//         },
//     });
// };


const token = localStorage.getItem("access_token")


export const httpRequest = axios.create({
    baseURL: 'https://islombekorifov7777755555.pythonanywhere.com',
    timeout: 3000,
    headers: { 'X-Custom-Header': 'foobar', Authorization: `Bearer ${token} `}
})


