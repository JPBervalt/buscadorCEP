import axios from "axios";

const apiURL = axios.create({
    baseURL:"https://viacep.com.br/ws/"
});

export default apiURL;
