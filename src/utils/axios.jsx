import axios from 'axios'; 

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params: {
        api_key: "2d0ea4b2faa935eba29866b4f9429d8f",
    },
    headers: {
        accept: "application/json",
    }, 
});

export default instance;

